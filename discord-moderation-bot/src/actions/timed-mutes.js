import discord
from discord.ext import commands
import asyncio

class TimedMutes(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name='mute', help='Mute a user for a specified amount of time')
    @commands.has_permissions(manage_roles=True)
    async def mute(self, ctx, member: discord.Member, duration: int, time_unit: str, *, reason=None):
        mute_role = discord.utils.get(ctx.guild.roles, name='Muted')

        if not mute_role:
            mute_role = await ctx.guild.create_role(name='Muted')
            for channel in ctx.guild.channels:
                await channel.set_permissions(mute_role, send_messages=False)

        await member.add_roles(mute_role, reason=reason)
        await ctx.send(f'{member.mention} has been muted for {duration} {time_unit}(s)')

        if time_unit == 'seconds':
            await asyncio.sleep(duration)
        elif time_unit == 'minutes':
            await asyncio.sleep(duration * 60)
        elif time_unit == 'hours':
            await asyncio.sleep(duration * 3600)
        elif time_unit == 'days':
            await asyncio.sleep(duration * 86400)

        await member.remove_roles(mute_role)
        await ctx.send(f'{member.mention} has been unmuted after {duration} {time_unit}(s)')

def setup(bot):
    bot.add_cog(TimedMutes(bot))