import * as ss58 from "@subsquid/ss58"

export const hexToNativeAddress = (address: string | undefined): string => {
    if (!address) return '0x';
    try {
        return ss58.codec(42).encode(address);
    } catch (error) {
        console.error("Error converting hex value to native address:", error);
        return '0x';
    }
}