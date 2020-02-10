import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Link } from "@material-ui/core";

import RRLogo from "../../Resources/images/projects/rr_logo.png";
import DJHLogo from "../../Resources/images/projects/djh-logo.jpg";
import MaskeyLogo from "../../Resources/images/projects/maskeylogo.jpg";
import ATLLogo from "../../Resources/images/projects/logo-default.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={RRLogo}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Rock &amp; Reign Beauty Spa
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link target="_blank" href="http://rockandreignbeauty.co.za/">
                <Button size="small" color="primary">
                  Visit site
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={RRLogo}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Rock &amp; Reign Online Store
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link
                target="_blank"
                href="http://shop.rockandreignbeauty.co.za/"
              >
                <Button size="small" color="primary">
                  Visit site
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={DJHLogo}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  DJ Happygal
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link target="_blank" href="http://djhappygal.com">
                <Button size="small" color="primary">
                  Visit site
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                style={{ width: "700px" }}
                image={ATLLogo}
                title="ATL Management"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ATL Management
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link target="_blank" href="http://atlmanagement.co.za">
                <Button size="small" color="primary">
                  Visit site
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={MaskeyLogo}
                title="Maskey Health Services"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Maskey Health Services
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link target="_blank" href="http://maskeyhealthservices.org">
                <Button size="small" color="primary">
                  Visit site
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
