import { contractAddress } from "../const/yourDetails";

export default async function checkBalance(sdk, address) {
  const editionDrop = await sdk.getContract(
    "0x9c1361fFA29445297711ce5cE5275EFF3D2a79c0", // replace this with your contract address
    "edition-drop"
  );

  const balance = await editionDrop.balanceOf(address, 0);

  // gt = greater than
  return balance.gt(0);
}
