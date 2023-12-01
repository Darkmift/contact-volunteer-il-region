export interface ContactVolunteerDetails {
    volunteerPhoneNumber: string;
    volunteerName: string;
    seniorName: string;
    seniorPhoneNumber: string;
    subscriptionNumber: string;
    communityLeader: string;
    hoursThreshold: number;
}

export type MessageType = {
    text: string;
    html: string;
    protocolType: string;
    attachmentUris: null;
    from: string;
    to: string;
    dateTime: string;
    providerMessageId: string;
    departmentId: string;
    status: string;
    files: null;
    serviceProvider: number;
    level: string;
    message: string;
    timestamp: string;
};
