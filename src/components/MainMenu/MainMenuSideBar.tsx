import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import { MainMenuSideBarItems, MainMenuSideBarProps } from "./MenuSideBarProps";
import { useNavigate } from "react-router";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useNavigateToTop } from "../../hooks/useNavigateToTop";

export default function MainMenuSideBar(props: MainMenuSideBarProps) {
  const { /* items, */ selectedIndex, setSelectedIndex } = props;
  const navigate = useNavigateToTop();

  const quickStartItemsIni: MainMenuSideBarItems[] = [
    {
      label: "Getting started",
      index: 0,
      onClick: () => navigate("/getting-started"),
    },
    {
      label: "Usage -  Basic & Advanced example",
      index: 1,
      onClick: () => navigate("/usage"),
    },
  ];

  const RegularItemsIni: MainMenuSideBarItems[] = [
    {
      //Icon: <FileOpenIcon />,
      label: "Components",
      index: 2,
      isOpen:false,
      subMenu: [
        {
          label: "Dropzone",
          index: 21,
          onClick: () => navigate("/components/dropzone"),
        },
        {
          label: "FileMosaic",
          index: 22,
          onClick: () => navigate("/components/filemosaic"),
        },
        {
          label: "FileInputButton",
          index: 23,
          onClick: () => navigate("/components/fileinputbutton"),
        },
        {
          label: "FileCard",
          index: 24,
          onClick: () => navigate("/components/filecard"),
        },
      ],
    },
    {
      // Icon: <DocumentScannerIcon />,
      label: "API documentation",
      index: 3,
      isOpen:false,

      subMenu: [
        {
          label: "Dropzone",
          index: 31,
          onClick: () => navigate("/api/dropzone"),
        },

        {
          label: "FileMosaic",
          index: 32,
          onClick: () => navigate("/api/filemosaic"),
        },
        {
          label: "FileInputButton",
          index: 33,
          onClick: () => navigate("/api/fileinputbutton"),
        },
        {
          label: "FileCard",
          index: 34,
          onClick: () => navigate("/api/filecard"),
        },
        {
          label: "FullScreenPreview",
          index: 34,
          onClick: () => navigate("/api/fullscreenpreview"),
        },
        {
          label: "ImagePreview",
          index: 34,
          onClick: () => navigate("/api/imagepreview"),
        },
        {
          label: "VideoPreview",
          index: 34,
          onClick: () => navigate("/api/videopreview"),
        },
      ],
    },
    {
      label: "Server side",
      index: 5,
      onClick: () => navigate("/server-side"),
    },
    {
      label: "Code Generator",
      index: 6,
      onClick: () => navigate("/code-generator"),
    },
    {
      label: "Types",
      index: 7,
      onClick: () => navigate("/types"),
    },

    {
      label: "Utilities Methods",
      index: 8,
      onClick: () => navigate("/utilities-methods"),
    },
  ];

  const [quickStartItems, setQuickStartItems] =
    React.useState(quickStartItemsIni);

  const [regularItems, setRegularItemsIni] = React.useState(RegularItemsIni);

  const handleClick = () => {
    //setOpen(!open);
  };

  const handleCLickItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    onClick: Function | undefined
  ): void => {
    onClick?.();
  };

  //const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    onClick: Function | undefined,
    withSubMenu?: boolean
  ) => {
    //setSelectedIndex(index);
    if (!withSubMenu) {
      onClick?.();
    } else {

      setRegularItemsIni((arr) =>
        arr.map((item) => {
          if (item.index === index) {
            return { ...item, isOpen: !item.isOpen };
          }
          return { ...item };
        })
      );
    }
  };

  return (
    <React.Fragment>
      <List
        sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <ElectricBoltIcon /> Quick Start
          </ListSubheader>
        }
      >
        {quickStartItems &&
          quickStartItems.map(
            ({ Icon, label, onClick, index, subMenu, isOpen }, indexBase) => (
              <React.Fragment key={indexBase}>
                <ListItemButton
                  style={{ padding: "2px 20px" }}
                  key={indexBase}
                  selected={subMenu === undefined && selectedIndex === index}
                  onClick={(event) =>
                    handleListItemClick(
                      event,
                      index,
                      onClick,
                      subMenu !== undefined
                    )
                  }
                >
                  {Icon && (
                    <ListItemIcon
                      style={{ minWidth: "30px", marginLeft: "5px" }}
                    >
                      {Icon}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={label || ""}
                    primaryTypographyProps={{ fontWeight: "600" }}
                  />
                </ListItemButton>

                {subMenu && (
                  <Collapse
                    in={isOpen}
                    timeout="auto"
                    unmountOnExit
                    key={"collapse-submenu" + indexBase}
                  >
                    <List component="div" disablePadding>
                      {subMenu.map(
                        ({ Icon, label, onClick, index }, index2) => (
                          <ListItemButton
                            sx={{ pl: 4 }}
                            selected={selectedIndex === index}
                            key={index2 + indexBase}
                            onClick={(event) =>
                              handleListItemClick(event, index, onClick)
                            }
                          >
                            {Icon && <ListItemIcon>{Icon}</ListItemIcon>}
                            <ListItemText primary={label || ""} />
                          </ListItemButton>
                        )
                      )}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            )
          )}
      </List>
      <List
        sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Full documentation
          </ListSubheader>
        }
      >
        {regularItems &&
          regularItems.map(
            ({ Icon, label, onClick, index, subMenu, isOpen }, indexBase) => (
              <React.Fragment key={indexBase}>
                <ListItemButton
                  style={{ padding: "2px 20px" }}
                  key={indexBase}
                  selected={subMenu === undefined && selectedIndex === index}
                  onClick={(event) =>
                    handleListItemClick(
                      event,
                      index,
                      onClick,
                      subMenu !== undefined
                    )
                  }
                >
                  {Icon && (
                    <ListItemIcon
                      style={{ minWidth: "30px", marginLeft: "5px" }}
                    >
                      {Icon}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={label || ""}
                    primaryTypographyProps={{ fontWeight: "600" }}
                  />
                </ListItemButton>

                {subMenu && (
                  <Collapse
                    in={isOpen}
                    timeout="auto"
                    unmountOnExit
                    key={"collapse-submenu" + indexBase}
                  >
                    <List component="div" disablePadding>
                      {subMenu.map(
                        ({ Icon, label, onClick, index }, index2) => (
                          <ListItemButton
                            style={{ paddingTop: 0 }}
                            sx={{ pl: 4 }}
                            selected={selectedIndex === index}
                            key={index2 + indexBase}
                            onClick={(event) =>
                              handleListItemClick(event, index, onClick)
                            }
                          >
                            {Icon && <ListItemIcon>{Icon}</ListItemIcon>}
                            <ListItemText primary={label || ""} />
                          </ListItemButton>
                        )
                      )}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            )
          )}
      </List>
    </React.Fragment>
  );
}