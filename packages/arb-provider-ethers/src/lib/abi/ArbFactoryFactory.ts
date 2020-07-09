/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from 'ethers'
import { Provider } from 'ethers/providers'
import { UnsignedTransaction } from 'ethers/utils/transaction'

import { TransactionOverrides } from '.'
import { ArbFactory } from './ArbFactory'

export class ArbFactoryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _rollupTemplate: string,
    _globalInboxAddress: string,
    _challengeFactoryAddress: string,
    overrides?: TransactionOverrides
  ): Promise<ArbFactory> {
    return super.deploy(
      _rollupTemplate,
      _globalInboxAddress,
      _challengeFactoryAddress,
      overrides
    ) as Promise<ArbFactory>
  }
  getDeployTransaction(
    _rollupTemplate: string,
    _globalInboxAddress: string,
    _challengeFactoryAddress: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(
      _rollupTemplate,
      _globalInboxAddress,
      _challengeFactoryAddress,
      overrides
    )
  }
  attach(address: string): ArbFactory {
    return super.attach(address) as ArbFactory
  }
  connect(signer: Signer): ArbFactoryFactory {
    return super.connect(signer) as ArbFactoryFactory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbFactory {
    return new Contract(address, _abi, signerOrProvider) as ArbFactory
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_rollupTemplate',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_globalInboxAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_challengeFactoryAddress',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'vmAddress',
        type: 'address',
      },
    ],
    name: 'RollupCreated',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: 'challengeFactoryAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes32',
        name: '_vmState',
        type: 'bytes32',
      },
      {
        internalType: 'uint128',
        name: '_gracePeriodTicks',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: '_arbGasSpeedLimitPerTick',
        type: 'uint128',
      },
      {
        internalType: 'uint64',
        name: '_maxExecutionSteps',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: '_maxBlockBoundsWidth',
        type: 'uint64',
      },
      {
        internalType: 'uint128',
        name: '_stakeRequirement',
        type: 'uint128',
      },
      {
        internalType: 'address payable',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'createRollup',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'globalInboxAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'rollupTemplate',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516103493803806103498339818101604052606081101561003357600080fd5b5080516020820151604090920151600080546001600160a01b039384166001600160a01b03199182161790915560018054948416948216949094179093556002805492909116919092161790556102ba8061008f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063582923c71461005157806362e3c0b1146100755780638689d9961461007d578063e13a218e14610085575b600080fd5b6100596100ee565b604080516001600160a01b039092168252519081900360200190f35b6100596100fd565b61005961010c565b6100ec600480360360e081101561009b57600080fd5b508035906001600160801b036020820135811691604081013582169167ffffffffffffffff606083013581169260808101359091169160a082013516906001600160a01b0360c0909101351661011b565b005b6001546001600160a01b031681565b6002546001600160a01b031681565b6000546001600160a01b031681565b60008054610131906001600160a01b0316610233565b600254600154604080516379d1120b60e01b8152600481018d90526001600160801b03808d166024830152808c16604483015267ffffffffffffffff808c1660648401528a166084830152881660a48201526001600160a01b0387811660c483015293841660e482015291831661010483015251929350908316916379d1120b916101248082019260009290919082900301818387803b1580156101d457600080fd5b505af11580156101e8573d6000803e3d6000fd5b5050604080516001600160a01b038516815290517f84c162f1396badc29f9c932c79d7495db699b615e2c0da163ae26bd5dbe71d7c9350908190036020019150a15050505050505050565b6000808260601b9050604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f094935050505056fea265627a7a723158204492b1e32ac175252191f411b4a3a65ba21a14e552eb80dbd9f15765b4ecdbc464736f6c63430005110032'
