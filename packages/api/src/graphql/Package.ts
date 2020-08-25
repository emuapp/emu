import { schema } from "nexus";

schema.objectType({
  name: "Package",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.type();
  },
});
