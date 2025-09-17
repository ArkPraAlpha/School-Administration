import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

// New Mock Data for College Contacts
const mockCollegeContacts = [
    { id: 1, name: "IET Lucknow", email: "registrar@ietlucknow.ac.in", phone: "(0522) 277-1078", address: "Sitapur Road, Mubarakpur", city: "Lucknow", zipCode: "226021" },
    { id: 2, name: "IIT Delhi", email: "info@iitd.ac.in", phone: "(011) 2659-7135", address: "Hauz Khas", city: "New Delhi", zipCode: "110016" },
    { id: 3, name: "IIT Bombay", email: "pro@iitb.ac.in", phone: "(022) 2572-2545", address: "Powai", city: "Mumbai", zipCode: "400076" },
    { id: 4, name: "NIT Trichy", email: "dean@nitt.edu", phone: "(0431) 250-3000", address: "Tanjore Main Road, National Highway 67", city: "Tiruchirappalli", zipCode: "620015" },
    { id: 5, name: "NIT Warangal", email: "registrar@nitw.ac.in", phone: "(0870) 246-2020", address: "National Institute of Technology Campus", city: "Warangal", zipCode: "506004" },
    { id: 6, name: "IIT Kanpur", email: "infocell@iitk.ac.in", phone: "(0512) 259-0151", address: "Grand Trunk Road", city: "Kanpur", zipCode: "208016" },
    { id: 7, name: "IIT Madras", email: "admissions@iitm.ac.in", phone: "(044) 2257-8130", address: "Sardar Patel Road", city: "Chennai", zipCode: "600036" },
    { id: 8, name: "NIT Surathkal", email: "contact@nitk.edu.in", phone: "(0824) 247-4000", address: "NH 66, Srinivasnagar", city: "Surathkal", zipCode: "575025" },
];

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "College Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone / Landline",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="COLLEGE CONTACTS"
        subtitle="List of College Contact Information"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockCollegeContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
