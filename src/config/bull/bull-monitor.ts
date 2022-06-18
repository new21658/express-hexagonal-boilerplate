import { Types } from "@types";
import { BullMonitorFastify } from "@bull-monitor/fastify";
import { FastifyInstance } from "fastify";
import { BullAdapter } from "@bull-monitor/root/dist/bull-adapter";
import { Container } from "inversify";
import { IndexUserQueue } from "@queue/index-user.queue";

export const setupBullMonitor = async (
  app: FastifyInstance,
  diContainer: Container
) => {
  const monitor = new BullMonitorFastify({
    queues: [
      new BullAdapter(
        diContainer.get<IndexUserQueue>(Types.IndexUserQueue).getQueueInstance()
      ),
      // readonly queue
      //  new BullAdapter(new Queue("2", "REDIS_URI"), { readonly: true }),
    ],
    // enables graphql introspection query. false by default if NODE_ENV == production, true otherwise
    gqlIntrospection: true,
    baseUrl: "/queue-monitor",
    // enable metrics collector. false by default
    // metrics are persisted into redis as a list
    // with keys in format "bull_monitor::metrics::{{queue}}"
    metrics: {
      // collect metrics every X
      // where X is any value supported by https://github.com/kibertoad/toad-scheduler
      collectInterval: { hours: 1 },
      maxMetrics: 100,
      // disable metrics for specific queues
      blacklist: ["1"],
    },
  });
  await monitor.init({ app });
  await app.register(monitor.plugin);
};
