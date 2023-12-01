// import api from 'api';
import logger from '../utils/logger-winston';
import env from '../config';
import axios from 'axios';
import { ContactVolunteerDetails, MessageType } from '../types';

export const cleanValue = (value: string): string => {
    return value.replace(/\n/g, '').replace(/\s+/g, ' ').trim();
};

export const messageVolunteerOnWhatsapp = async (notification: ContactVolunteerDetails) => {
    try {
        const axiosInstance = axios.create({
            baseURL: env.GLASSIX_UNIQUE_URL,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${env.GLASSIX_UNIQUE_TOKEN}`,
            },
        });

        const { data: messageSendAttemptData } = (await axiosInstance.post('', {
            template: 'reminder_v2',
            waba: env.GLASSIX_WABA,
            from: env.GLASSIX_FROM_PHONE_NUMBER,
            to: notification.volunteerPhoneNumber.replace(/\n/g, '').trim(),
            protocolType: 'WhatsApp',
            params: [
                {
                    1: cleanValue(notification.volunteerName),
                },
                {
                    2: cleanValue(notification.seniorName),
                },
                {
                    3: cleanValue(notification.seniorPhoneNumber),
                },
                {
                    4: cleanValue(notification.subscriptionNumber),
                },
                {
                    5: cleanValue(notification.communityLeader),
                },
                {
                    6: notification.hoursThreshold.toString(),
                },
            ],
        })) as { data: MessageType };

        return messageSendAttemptData;
    } catch (error) {
        logger.error('messageVolunteerOnWhatsapp error', error as Error);
        throw error;
    }
};
