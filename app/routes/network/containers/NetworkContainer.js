import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { fetchDescribeNetwork } from '../../../reducers/network'
import { fetchPeers } from '../../../reducers/peers'

import Network from '../components/Network'

const mapDispatchToProps = {
  fetchDescribeNetwork,
  fetchPeers
}

const mapStateToProps = state => ({
  network: state.network,
  peers: state.peers,
  identity_pubkey: state.info.data.identity_pubkey
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Network))