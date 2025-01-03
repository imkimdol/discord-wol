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
            const owner_id = process.env.OWNER_ID;
            if (!owner_id) return interaction.editReply('No specified owner ID.');
            if (owner_id !== interaction.user.id) return interaction.editReply('You are not permitted to use this command.');

            const address = process.env.MAC_ADDRESS;
            if (!address) return interaction.editReply('No specified MAC address.');

            wol.wake(address);
            interaction.editReply('Sent wake packet.');
        } catch (err) {
            console.error(err);
            interaction.editReply('Encountered an issue.');
        }
    },
};