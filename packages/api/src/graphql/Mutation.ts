import { schema } from "nexus";

schema.mutationType({
  definition(t) {
    t.crud.createOnePackage();
  },
});
