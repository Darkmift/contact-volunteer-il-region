export interface ItemsResponse {
    items: ItemElement[];
}

export interface ItemElement {
    id: string;
    name: string;
    group: Group;
    column_values: ColumnValue[];
}

export interface ColumnValue {
    value: null | string;
    column: Group;
}

export interface Group {
    id: string;
    title: string;
}

export interface ILinkedPulseId {
    linkedPulseId: number;
}

export interface ILinkedPulseIds {
    changed_at: string;
    linkedPulseIds: ILinkedPulseId[];
}

export interface IPhoneColValueParsed {
    phone: string;
    changed_at: string;
    countryShortName: string;
}

export interface ICommunityLeaderColValueParsed {
    index: number;
    post_id: string | null;
}
