export class Device {
    public client_id: number;
    public type: string;
    public device_id: number;
    public firmware: string;
    public fimware_url: string;
    public last_software_updated: string;
    public last_online: string;
    public is_online: boolean;
    public mode: boolean;

    public actuators: any[];
    public sensors: any[];
}
