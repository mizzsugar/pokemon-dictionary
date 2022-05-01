-- CreateTable
CREATE TABLE "types" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "display_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "monster_types" (
    "type_key" TEXT NOT NULL,
    "monster_id" INTEGER NOT NULL,

    PRIMARY KEY ("type_key", "monster_id"),
    CONSTRAINT "monster_types_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monsters" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "monster_types_type_key_fkey" FOREIGN KEY ("type_key") REFERENCES "types" ("key") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "types_key_key" ON "types"("key");
