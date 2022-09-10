import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    col1: "Wenda",
    col2: "Jecock",
    col3: "wjecock0@hexun.com",
  },
  {
    id: 2,
    col1: "Antony",
    col2: "Angerstein",
    col3: "aangerstein1@senate.gov",
  },
  {
    id: 3,
    col1: "Enrique",
    col2: "Grandison",
    col3: "egrandison2@skype.com",
  },
  {
    id: 4,
    col1: "Glendon",
    col2: "Dorian",
    col3: "gdorian3@123-reg.co.uk",
  },
  {
    id: 5,
    col1: "Mirabella",
    col2: "Pinnion",
    col3: "mpinnion4@jugem.jp",
  },
  {
    id: 6,
    col1: "Bear",
    col2: "Guerra",
    col3: "bguerra5@cnbc.com",
  },
  {
    id: 7,
    col1: "Faun",
    col2: "Anglim",
    col3: "fanglim6@topsy.com",
  },
  {
    id: 8,
    col1: "Emelen",
    col2: "Fell",
    col3: "efell7@tuttocitta.it",
  },
  {
    id: 9,
    col1: "Zacherie",
    col2: "Cromer",
    col3: "zcromer8@liveinternet.ru",
  },
  {
    id: 10,
    col1: "Park",
    col2: "Shurrocks",
    col3: "pshurrocks9@army.mil",
  },
  {
    id: 11,
    col1: "Irving",
    col2: "Schelle",
    col3: "ischellea@theatlantic.com",
  },
  {
    id: 12,
    col1: "Lemuel",
    col2: "Majury",
    col3: "lmajuryb@nationalgeographic.com",
  },
  {
    id: 13,
    col1: "Celestyna",
    col2: "Rabat",
    col3: "crabatc@usgs.gov",
  },
  {
    id: 14,
    col1: "Marnia",
    col2: "Oldcroft",
    col3: "moldcroftd@howstuffworks.com",
  },
  {
    id: 15,
    col1: "Weston",
    col2: "Balderstone",
    col3: "wbalderstonee@un.org",
  },
  {
    id: 16,
    col1: "Dorella",
    col2: "Bracci",
    col3: "dbraccif@flavors.me",
  },
  {
    id: 17,
    col1: "Gal",
    col2: "Tittletross",
    col3: "gtittletrossg@ucoz.com",
  },
  {
    id: 18,
    col1: "Junie",
    col2: "Ianne",
    col3: "jianneh@slashdot.org",
  },
  {
    id: 19,
    col1: "Brion",
    col2: "Rapport",
    col3: "brapporti@hp.com",
  },
  {
    id: 20,
    col1: "Verina",
    col2: "Synnott",
    col3: "vsynnottj@squarespace.com",
  },
];

const columns = [
  { field: "col1", headerName: "First Name", width: 250 },
  { field: "col2", headerName: "Last Name", width: 250 },
  { field: "col3", headerName: "Email", width: 250 },
];

const RandomTable = () => {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export { RandomTable };
