// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract MetaTokenNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("Nufin-Allah", "NFA") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmZxsxR6Pj2CL3HfszjH31SSZMTQ8jRhX1kE1k6c2BkENe/";
    }

    function promptDescription() external pure returns (string memory) {
        return "Vibrant Nigerian Culture";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}
