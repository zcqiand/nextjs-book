export const sysRoleMenu = pgTable(
  "sys_role_menu",
  {
    roleId: uuid("role_id").notNull(),
    menuId: uuid("menu_id").notNull(),
  },
  (table) => {
    return {
      idxSysRoleMenuMenuId: index("idx_sys_role_menu_menu_id").using(
        "btree",
        table.menuId.asc().nullsLast(),
      ),
      sysRoleMenuRoleIdSysRoleIdFk: foreignKey({
        columns: [table.roleId],
        foreignColumns: [sysRole.id],
        name: "sys_role_menu_role_id_sys_role_id_fk",
      }).onDelete("cascade"),
      sysRoleMenuMenuIdSysMenuIdFk: foreignKey({
        columns: [table.menuId],
        foreignColumns: [sysMenu.id],
        name: "sys_role_menu_menu_id_sys_menu_id_fk",
      }).onDelete("cascade"),
      sysRoleMenuRoleIdMenuIdPk: primaryKey({
        columns: [table.roleId, table.menuId],
        name: "sys_role_menu_role_id_menu_id_pk",
      }),
    };
  },
);