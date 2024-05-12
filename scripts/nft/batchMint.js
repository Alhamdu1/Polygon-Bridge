const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const MetaTokenNFTFactory = await hre.ethers.getContractFactory(
    "MetaTokenNFT"
  );
  const metaTokenNft = await MetaTokenNFTFactory.attach(
    "0x3DAB4E3726f32648067C3692275AED8a7F18191d"
  );

  const mintTx = await metaTokenNft.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await metaTokenNft.balanceOf(
        "0xedcfB0Fc3081826539A99549a2d7BCB0d9509F29"
      )) +
      " MetaToken NFTs to " +
      "0xedcfB0Fc3081826539A99549a2d7BCB0d9509F29"
  );
  console.log(await metaTokenNft.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
