import discord

async def mute(ctx, member: discord.Member, time: int, reason: str):
    muted_role = discord.utils.get(ctx.guild.roles, name="Muted")
    
    if not muted_role:
        muted_role = await ctx.guild.create_role(name="Muted")

        for channel in ctx.guild.channels:
            await channel.set_permissions(muted_role, send_messages=False)
    
    await member.add_roles(muted_role, reason=reason)
    await ctx.send(f"{member.mention} has been muted for {time} minutes. Reason: {reason}")

    await asyncio.sleep(time * 60)
    await member.remove_roles(muted_role)
    await ctx.send(f"{member.mention} has been unmuted after {time} minutes.")