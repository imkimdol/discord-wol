import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import CommandsClient from '../commandsClient';
import wol from 'wake_on_lan';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wake')
        .setDescription('Wakes the configured device.'),
    async execute(interaction: ChatInputCommandInteraction, client: CommandsClient) {
        await interaction.deferReply({ephemeral: true});

        try {
            const address = process.env.MAC_ADDRESS;
            if (!address) throw new Error("No specified MAC address.");

            wol.wake(address);
            interaction.editReply('Sent wake packet.');
        } catch (err) {
            console.error(err);
            interaction.editReply('Encountered an issue.');
        }
    },
};