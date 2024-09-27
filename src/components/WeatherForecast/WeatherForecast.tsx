"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import useWeatherForecast from "~/hooks/useWeatherForecast";

export const WeatherForecast = () => {
  const { data: weatherForecast, isLoading, isError } = useWeatherForecast();

  if (isLoading) {
    return <Paper>loading...</Paper>;
  }

  if (isError || !weatherForecast || !weatherForecast?.data) {
    return <Paper>can&apos;t find</Paper>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell align="right">Summary</TableCell>
            <TableCell align="right">Temp. Celsius</TableCell>
            <TableCell align="right">Temp. Fahrenheit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weatherForecast.data.map((row) => (
            <TableRow key={row.date} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.summary}</TableCell>
              <TableCell align="right">{row.temperatureC}</TableCell>
              <TableCell align="right">{row.temperatureF}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
