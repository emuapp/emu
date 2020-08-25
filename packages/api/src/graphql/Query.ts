import { schema } from "nexus";

schema.queryType({
  definition(t) {
    t.field("package", {
      type: "Package",
      args: {
        name: schema.stringArg({
          required: true,
        }),
        type: schema.arg({
          required: true,
          type: "PackageType",
        }),
      },
      resolve(_, args, ctx) {
        return ctx.db.package.findOne({
          where: {
            UniqueName: args,
          },
        });
      },
    });
  },
});
