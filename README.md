# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
npx hardhat run scripts/deploy.js --network localhost
```

Differ between Public and Pure?
* Public is accessible both in the contracts and the externally and Gas cost is higher , Modify
* Pure is accessible only internally  and  Gas cost is Lower , Does not Modify