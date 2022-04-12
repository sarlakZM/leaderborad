// export type Protocol = 'RDP' | 'SSH' | 'VNC';
// export type AddressType = 'NETWORK' | 'IP_RANGE';

// export type Subset<T, U extends T> = U;

export interface PagedResult<T> {
  total: number;
  results: T[];
}

export interface NameValuePair<T> {
  readonly name: string;
  readonly value: T;
}

// export const addressTypes: readonly NameValuePair<AddressType>[] = [
//   {
//     name: 'Network',
//     value: 'NETWORK',
//   },
//   {
//     name: 'IP Range',
//     value: 'IP_RANGE',
//   },
// ];

// export const ipMasks: readonly string[] = [
//   '255.255.255.255',
//   '255.255.255.254',
//   '255.255.255.252',
//   '255.255.255.248',
//   '255.255.255.240',
//   '255.255.255.224',
//   '255.255.255.192',
//   '255.255.255.128',
//   '255.255.255.0',
//   '255.255.254.0',
//   '255.255.252.0',
//   '255.255.248.0',
//   '255.255.240.0',
//   '255.255.224.0',
//   '255.255.192.0',
//   '255.255.128.0',
//   '255.255.0.0',
//   '255.254.0.0',
//   '255.252.0.0',
//   '255.248.0.0',
//   '255.240.0.0',
//   '255.224.0.0',
//   '255.192.0.0',
//   '255.128.0.0',
//   '255.0.0.0',
// ];

// export const protocols: readonly NameValuePair<Protocol>[] = [
//   {
//     name: 'RDP',
//     value: 'RDP',
//   },
//   {
//     name: 'SSH',
//     value: 'SSH',
//   },
//   {
//     name: 'VNC',
//     value: 'VNC',
//   },
// ];

// export const enabledStates: readonly NameValuePair<boolean>[] = [
//   {
//     name: 'Enabled',
//     value: true,
//   },
//   {
//     name: 'Disabled',
//     value: false,
//   },
// ];
