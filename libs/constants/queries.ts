export const GET_BLOCK_WITH_VALIDATOR = `
query GetBlockWithValidator($blockHash: String!) {
  app_blocks(where: {hash: {_eq: $blockHash}}) {
    id
    hash
    created_at
    validator
  }
}
`;

export const GET_FULL_BLOCK = `
query GetFullBlock ($id:String!) {
  app_blocks_by_pk(id: $id) {
    id
    hash
    created_at
    parent_hash
    spec_version
    state_root
    validator
    events {
      id
      index
      emit_data
      emit_method
      emit_section
    }
    extrinsics {
      id
      hash
      index
      signer
      call_args
      call_method
      call_section
    }
  }
}
`;

export const GET_FULL_BLOCK_ACTION = `query GetFullBlockAction($id: String!) {
  GetFullBlock(id: $id) {
    id
    created_at
    hash
    validator
    events {
      id
      emit_section
      emit_method
      emit_data
    }
    extrinsics {
      id
      hash
      call_section
      call_method
      call_args
    }
  }
}
`;
