import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

// New Mock Data for College Subscriptions
const mockCollegeSubscriptions = [
    { id: 1, name: "IET Lucknow", email: "registrar@ietlucknow.ac.in", phone: "(0522) 277-1078", days: 365, registeredDate: "2024-09-01" },
    { id: 2, name: "IIT Delhi", email: "info@iitd.ac.in", phone: "(011) 2659-7135", days: 410, registeredDate: "2024-07-20" },
    { id: 3, name: "IIT Bombay", email: "pro@iitb.ac.in", phone: "(022) 2572-2545", days: 120, registeredDate: "2025-05-10" },
    { id: 4, name: "NIT Trichy", email: "dean@nitt.edu", phone: "(0431) 250-3000", days: 500, registeredDate: "2024-04-25" },
    { id: 5, name: "NIT Warangal", email: "registrar@nitw.ac.in", phone: "(0870) 246-2020", days: 280, registeredDate: "2024-12-01" },
    { id: 6, name: "IIT Kanpur", email: "infocell@iitk.ac.in", phone: "(0512) 259-0151", days: 95, registeredDate: "2025-06-05" },
];

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
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
      field: "days",
      headerName: "Days on Platform",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.days}
        </Typography>
      ),
    },
    {
      field: "registeredDate",
      headerName: "Registered Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="COLLEGE SUBSCRIPTION LOGS" subtitle="List of College Subscription Details" />
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
        }}
      >
        <DataGrid checkboxSelection rows={mockCollegeSubscriptions} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
