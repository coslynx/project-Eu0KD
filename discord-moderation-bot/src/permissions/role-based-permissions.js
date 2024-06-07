const roleBasedPermissions = {
  roles: {
    admin: {
      canKick: true,
      canBan: true,
      canWarn: true,
      canMute: true,
      canTimedBan: true,
      canTimedMute: true,
      canManageFilters: true,
      canViewLogs: true,
      canManagePermissions: true,
      canManageEnhancements: true,
    },
    moderator: {
      canKick: true,
      canBan: true,
      canWarn: true,
      canMute: true,
      canTimedBan: true,
      canTimedMute: true,
      canManageFilters: false,
      canViewLogs: true,
      canManagePermissions: false,
      canManageEnhancements: false,
    },
    member: {
      canKick: false,
      canBan: false,
      canWarn: false,
      canMute: false,
      canTimedBan: false,
      canTimedMute: false,
      canManageFilters: false,
      canViewLogs: false,
      canManagePermissions: false,
      canManageEnhancements: false,
    },
  },
};

module.exports = roleBasedPermissions;