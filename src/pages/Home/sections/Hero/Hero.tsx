import { styled, Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2'
import Avatar from "../../../../assets/images/avatar.jpg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StyledButton from "../../../../components/StyledButton/StyledButton";


const Hero = () => {

    const StyledHero = styled("div")(()=> ({
        height: "100vh",
        display: "flex",
        alignItems: "center"

    }))

    const StyledImage = styled("img")(({ theme })=> ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs:12, md:5 }}>
                        <StyledImage src={Avatar} />
                    </Grid>
                    <Grid size={{ xs:12, md:7 }}>
                        <Typography color="primary.contrastText" variant="h1" textAlign={"center"} paddingBottom={2}>
                            Gustavo Suzuki
                        </Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>
                            I'm a Software Developer
                        </Typography>
                        <Grid container direction={{ xs:"column", md:"row"}} justifyContent={"center"} spacing={3}>
                        <Grid size={{ xs:12, md:4 }} display={"flex"} justifyContent={"center"} pt={3}>
                            <StyledButton onClick={() => window.open("https://www.linkedin.com/in/gustavo-suzuki-858189163/")}>
                                <LinkedInIcon/>
                                <Typography>
                                    Visit My Profile
                                </Typography>
                            </StyledButton>
                        </Grid>
                        <Grid size={{ xs:12, md:4 }} display={"flex"} justifyContent={"center"} pt={3}>
                            <StyledButton onClick={() => window.open("https://wa.me/5547997609807")}>
                                <WhatsAppIcon/>
                                <Typography>
                                    Contact me
                                </Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  