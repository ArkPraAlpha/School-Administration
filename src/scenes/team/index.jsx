import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// New Icons for Status
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

// New Mock Data for Registered Colleges
const mockRegisteredColleges = [
  { id: 1, name: "IET Lucknow", email: "registrar@ietlucknow.ac.in", phone: "(0522) 277-1078", status: "Active" },
  { id: 2, name: "IIT Delhi", email: "info@iitd.ac.in", phone: "(011) 2659-7135", status: "Active" },
  { id: 3, name: "IIT Bombay", email: "pro@iitb.ac.in", phone: "(022) 2572-2545", status: "Inactive" },
  { id: 4, name: "NIT Trichy", email: "dean@nitt.edu", phone: "(0431) 250-3000", status: "Active" },
  { id: 5, name: "NIT Warangal", email: "registrar@nitw.ac.in", phone: "(0870) 246-2020", status: "Active" },
  { id: 6, name: "IIT Kanpur", email: "infocell@iitk.ac.in", phone: "(0512) 259-0151", status: "Inactive" },
  { id: 7, name: "IIT Madras", email: "admissions@iitm.ac.in", phone: "(044) 2257-8130", status: "Active" },
  { id: 8, name: "NIT Surathkal", email: "contact@nitk.edu.in", phone: "(0824) 247-4000", status: "Inactive" },
];


const Team = () => {
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
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "Active"
                ? colors.greenAccent[600]
                : colors.redAccent[700]
            }
            borderRadius="4px"
          >
            {status === "Active" && <CheckCircleOutlineOutlinedIcon />}
            {status === "Inactive" && <HighlightOffOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="REGISTERED COLLEGES" subtitle="Managing the Registered Colleges" />
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
        <DataGrid checkboxSelection rows={mockRegisteredColleges} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
