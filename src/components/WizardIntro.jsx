import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions

// Components
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
} from "@material-ui/core";

class WizardIntro extends React.Component {

  render() {
    const {
        renderWalletImporter,
        nextBtn,
        prevBtn,
     } = this.props;

    if (this.props.currentStep !== 0) {
      return null
    }
    return (
        <Card className="wizard-card-wrapper">
            <CardHeader title="Create Your Multisig Wallet" />
            <CardContent>   
                <Grid item xs={12}>
                    {renderWalletImporter()}
                    <Box mt={3} id="wallet-wizard-nav-btn-wrapper">
                        {prevBtn}
                        {nextBtn}
                    </Box>
                </Grid>                   
            </CardContent>
        </Card>
    );
  }
}

WizardIntro.propTypes = {
  renderWalletImporter: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state.settings;
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(WizardIntro);
