import discord

async def warn_user(ctx, user, reason):
    if ctx.message.author.guild_permissions.kick_members:
        guild = ctx.guild
        log_channel = discord.utils.get(guild.text_channels, name='moderation-logs')
        
        if log_channel is None:
            await ctx.send('Error: Moderation log channel not found. Please create a channel named "moderation-logs" for logging.')
        else:
            embed = discord.Embed(title="User Warned", color=discord.Color.gold())
            embed.add_field(name="User", value=user.mention, inline=False)
            embed.add_field(name="Moderator", value=ctx.message.author.mention, inline=False)
            embed.add_field(name="Reason", value=reason, inline=False)
            
            await user.send(f'You have been warned in {guild.name} for: {reason}')
            await log_channel.send(embed=embed)
            await ctx.send(f'{user.mention} has been warned for: {reason}')
    else:
        await ctx.send('Error: You do not have permission to warn users.')

async def on_warn_error(ctx, error):
    await ctx.send(f'An error occurred while trying to warn the user: {error}')