pragma solidity ^0.4.17;

contract Lottery {
    address public owner;
    address[] public players;

    constructor() public {
        owner = msg.sender;
        players.push(owner);
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }

    function addPlayer(address playerToAdd) public returns (bool) {
        players.push(playerToAdd);
        return true;
    }

    function lenPlayers() public view returns (uint256) {
        return players.length;
    }
}
