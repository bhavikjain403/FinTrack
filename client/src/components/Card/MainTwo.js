import { Container, Paper, SimpleGrid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CardComponentTwo from "./CardComponentTwo";

// const Main = () => {
//   const midScreen = useMediaQuery("(min-width: 1300px)");
//   const largeScreen = useMediaQuery("(min-width: 1750px)");

//   return (
//     <></>
//     // <Container
//     //   ml={largeScreen ? 600 : midScreen ? 450 : 250}
//     //   mt={largeScreen ? 60 : 20}
//     // >
//     // <Paper radius="md" p={30}>
//     //     <h1>fwewe</h1>
//     // </Paper>
//     // </Container>
//   );
// };

import CardComponent from "./CardComponentOne";

const Main = () => {
    const midScreen = useMediaQuery("(min-width: 1300px)");
    const largeScreen = useMediaQuery("(min-width: 1750px)");
    const chapters = {
        "Financial Inclusion": [
            {
                "name": "Pradhan Mantri Jan Dhan Yojana",
                "url": "https://pmjdy.gov.in/",
                "applicable_states": "All States",
                "sector": "Banking and Financial Services"
            },
            {
                "name": "Pradhan Mantri Mudra Yojana",
                "url": "https://www.mudra.org.in/",
                "applicable_states": "All States",
                "sector": "Micro and Small Enterprises"
            },
            {
                "name": "Atal Pension Yojana",
                "url": "https://www.npscra.nsdl.co.in/individual-section.php",
                "applicable_states": "All States",
                "sector": "Pension and Retirement"
            },
            {
                "name": "Pradhan Mantri Vaya Vandana Yojana",
                "url": "https://www.licindia.in/Products/Pension-Plans/Pradhan-Mantri-Vaya-Vandana-Yojana",
                "applicable_states": "All States",
                "sector": "Pension and Retirement"
            },
            {
                "name": "Pradhan Mantri Suraksha Bima Yojana",
                "url": "https://www.jansuraksha.gov.in/Forms-PMSBY.aspx",
                "applicable_states": "All States",
                "sector": "Insurance"
            },
            {
                "name": "Pradhan Mantri Jeevan Jyoti Bima Yojana",
                "url": "https://www.jansuraksha.gov.in/Forms-PMJJBY.aspx",
                "applicable_states": "All States",
                "sector": "Insurance"
            }
        ],
        "Education and Skill Development": [
            {
                "name": "Sukanya Samriddhi Yojana",
                "url": "https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx",
                "applicable_states": "All States",
                "sector": "Savings and Investment"
            },
            {
                "name": "National Pension Scheme",
                "url": "https://enps.nsdl.com/eNPS/NationalPensionSystem.html",
                "applicable_states": "All States",
                "sector": "Pension and Retirement"
            },
            {
                "name": "Pradhan Mantri Kaushal Vikas Yojana",
                "url": "https://www.pmkvyofficial.org/",
                "applicable_states": "All States",
                "sector": "Skill Development"
            },
            {
                "name": "Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
                "url": "http://ddugky.gov.in/",
                "applicable_states": "All States",
                "sector": "Skill Development"
            }
        ],
        "Entrepreneurship and Startups": [
            {
                "name": "Stand-Up India",
                "url": "https://www.standupmitra.in/Home/Index",
                "applicable_states": "All States",
                "sector": "Entrepreneurship"
            },
            {
                "name": "Startup India",
                "url": "https://www.startupindia.gov.in/",
                "applicable_states": "All States",
                "sector": "Entrepreneurship"
            }
        ],
        "Agriculture and Rural Development": [
            {
                "name": "Pradhan Mantri Fasal Bima Yojana",
                "url": "https://pmfby.gov.in/",
                "applicable_states": "All States",
                "sector": "Agriculture Insurance"
            },
            {
                "name": "Pradhan Mantri Awas Yojana",
                "url": "https://pmaymis.gov.in/",
                "applicable_states": "All States",
                "sector": "Housing and Urban Development"
            },
            {
                "name": "Deen Dayal Upadhyaya Gram Jyoti Yojana",
                "url": "http://www.ddugjy.gov.in/",
                "applicable_states": "All States",
                "sector": "Rural Electrification"
            },
            {
                "name": "Pradhan Mantri Gram Sadak Yojana",
                "url": "https://www.pmgsy.nic.in/",
                "applicable_states": "All States",
                "sector": "Rural Roads and Connectivity"
            },
            {
                "name": "National Rural Employment Guarantee Act",
                "url": "https://nrega.nic.in/netnrega/home.aspx",
                "applicable_states": "All States",
                "sector": "Rural Employment and Livelihood"
            }
        ],
        "Health and Well-being": [
            {
                "name": "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana",
                "url": "https://www.pmjay.gov.in/",
                "applicable_states": "All States",
                "sector": "Health Insurance"
            },
            {
                "name": "Pradhan Mantri Bhartiya Janaushadhi Pariyojana",
                "url": "https://janaushadhi.gov.in/",
                "applicable_states": "All States",
                "sector": "Pharmaceuticals"
            }
        ],
        "Women and Child Development": [
            {
                "name": "Beti Bachao, Beti Padhao Yojana",
                "url": "https://betibachaobetipadhao.co.in/",
                "applicable_states": "All States",
                "sector": "Gender Equality and Empowerment"
            },
            {
                "name": "One Stop Centre Scheme",
                "url": "https://www.osc-cps.gov.in/",
                "applicable_states": "All States",
                "sector": "Women's Safety and Empowerment"
            },
            {
                "name": "Ujjawala Scheme",
                "url": "https://www.ujjwalayojana.gov.in/",
                "applicable_states": "All States",
                "sector": "Women's Health and Empowerment"
            }
        ]
    }
    return (
        <>
                {Object.values(chapters).map((category) => {
                    // console.log(category);
                    // category.map((scheme)=>{
                    //     return <CardComponentTwo info={scheme} />;
                    // })
                    return Object.values(category).map(val => {
                        console.log(val);
                        return <CardComponentTwo info={val} />;
                        // val.map((scheme) => {
                        //     console.log(scheme);
                        //     return <CardComponentTwo info={scheme} />;
                        // })
                    })
                })}
        </>
    );
};

export default Main;