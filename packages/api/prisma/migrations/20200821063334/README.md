# Migration `20200821063334`

This migration has been generated at 8/21/2020, 2:33:34 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "PackageType" AS ENUM ('npm')

CREATE TABLE "public"."Package" (
"id" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   NOT NULL ,
"name" text   NOT NULL ,
"type" "PackageType"  NOT NULL ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "UniqueName" ON "public"."Package"("name", "type")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200821063334
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,25 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+enum PackageType {
+  npm
+}
+
+model Package {
+  id        String      @default(uuid()) @id
+  createdAt DateTime    @default(now())
+  updatedAt DateTime    @updatedAt
+  name      String
+  type      PackageType
+
+  @@unique([name, type], name: "UniqueName")
+}
```


