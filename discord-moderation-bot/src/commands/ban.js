import discord

async def ban_user(ctx, member: discord.Member, reason=None):
    if ctx.author.guild_permissions.ban_members:
        if member.guild_permissions.ban_members:
            await ctx.send("You cannot ban this user.")
        else:
            await member.ban(reason=reason)
            await ctx.send(f"{member.mention} has been banned.")
    else:
        await ctx.send("You do not have permission to ban users.")