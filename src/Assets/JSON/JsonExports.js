import React from "react";

const countries = [
  {
    name: "Afghanistan",
    code: "AFG",
    emoji: "🇦🇫",
    unicode: "U+1F1E6 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
  },
  {
    name: "Albania",
    code: "ALB",
    emoji: "🇦🇱",
    unicode: "U+1F1E6 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
  },
  {
    name: "Algeria",
    code: "DZA",
    emoji: "🇩🇿",
    unicode: "U+1F1E9 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg",
  },
  {
    name: "Andorra",
    code: "AND",
    emoji: "🇦🇩",
    unicode: "U+1F1E6 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
  },
  {
    name: "Angola",
    code: "AGO",
    emoji: "🇦🇴",
    unicode: "U+1F1E6 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg",
  },
  {
    name: "Antigua & Barbuda",
    code: "ATG",
    emoji: "🇦🇬",
    unicode: "U+1F1E6 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg",
  },
  {
    name: "Argentina",
    code: "ARG",
    emoji: "🇦🇷",
    unicode: "U+1F1E6 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg",
  },
  {
    name: "Armenia",
    code: "ARM",
    emoji: "🇦🇲",
    unicode: "U+1F1E6 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
  },
  {
    name: "Aruba",
    code: "ABW",
    emoji: "🇦🇼",
    unicode: "U+1F1E6 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg",
  },
  {
    name: "Australia",
    code: "AUS",
    emoji: "🇦🇺",
    unicode: "U+1F1E6 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
  },
  {
    name: "Austria",
    code: "AUT",
    emoji: "🇦🇹",
    unicode: "U+1F1E6 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg",
  },
  {
    name: "Azerbaijan",
    code: "AZE",
    emoji: "🇦🇿",
    unicode: "U+1F1E6 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg",
  },
  {
    name: "Bahamas",
    code: "BHS",
    emoji: "🇧🇸",
    unicode: "U+1F1E7 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg",
  },
  {
    name: "Bahrain",
    code: "BHR",
    emoji: "🇧🇭",
    unicode: "U+1F1E7 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg",
  },
  {
    name: "Bangladesh",
    code: "BGD",
    emoji: "🇧🇩",
    unicode: "U+1F1E7 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
  },
  {
    name: "Barbados",
    code: "BRB",
    emoji: "🇧🇧",
    unicode: "U+1F1E7 U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg",
  },
  {
    name: "Belarus",
    code: "BlR",
    emoji: "🇧🇾",
    unicode: "U+1F1E7 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg",
  },
  {
    name: "Belgium",
    code: "BEL",
    emoji: "🇧🇪",
    unicode: "U+1F1E7 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg",
  },
  {
    name: "Belize",
    code: "BLZ",
    emoji: "🇧🇿",
    unicode: "U+1F1E7 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg",
  },
  {
    name: "Benin",
    code: "BEN",
    emoji: "🇧🇯",
    unicode: "U+1F1E7 U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg",
  },
  {
    name: "Bhutan",
    code: "BTN",
    emoji: "🇧🇹",
    unicode: "U+1F1E7 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg",
  },
  {
    name: "Bolivia",
    code: "BOL",
    emoji: "🇧🇴",
    unicode: "U+1F1E7 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg",
  },
  {
    name: "Bosnia & Herzegovina",
    code: "BIH",
    emoji: "🇧🇦",
    unicode: "U+1F1E7 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg",
  },
  {
    name: "Botswana",
    code: "BWA",
    emoji: "🇧🇼",
    unicode: "U+1F1E7 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg",
  },

  {
    name: "Brazil",
    code: "BRA",
    emoji: "🇧🇷",
    unicode: "U+1F1E7 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg",
  },
  {
    name: "Brunei",
    code: "BRN",
    emoji: "🇧🇳",
    unicode: "U+1F1E7 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg",
  },
  {
    name: "Bulgaria",
    code: "BGR",
    emoji: "🇧🇬",
    unicode: "U+1F1E7 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg",
  },
  {
    name: "Burkina Faso",
    code: "BFA",
    emoji: "🇧🇫",
    unicode: "U+1F1E7 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg",
  },
  {
    name: "Burundi",
    code: "BDI",
    emoji: "🇧🇮",
    unicode: "U+1F1E7 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg",
  },
  {
    name: "Cambodia",
    code: "KHM",
    emoji: "🇰🇭",
    unicode: "U+1F1F0 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg",
  },
  {
    name: "Cameroon",
    code: "CMR",
    emoji: "🇨🇲",
    unicode: "U+1F1E8 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg",
  },
  {
    name: "Canada",
    code: "CAN",
    emoji: "🇨🇦",
    unicode: "U+1F1E8 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg",
  },

  {
    name: "Cayman Islands",
    code: "CYM",
    emoji: "🇰🇾",
    unicode: "U+1F1F0 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg",
  },
  {
    name: "Central African Republic",
    code: "CAF",
    emoji: "🇨🇫",
    unicode: "U+1F1E8 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg",
  },
  {
    name: "Chad",
    code: "TCD",
    emoji: "🇹🇩",
    unicode: "U+1F1F9 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg",
  },
  {
    name: "Chile",
    code: "CHL",
    emoji: "🇨🇱",
    unicode: "U+1F1E8 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg",
  },
  {
    name: "China",
    code: "CHN",
    emoji: "🇨🇳",
    unicode: "U+1F1E8 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
  },
  {
    name: "Colombia",
    code: "COL",
    emoji: "🇨🇴",
    unicode: "U+1F1E8 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg",
  },
  {
    name: "Comoros",
    code: "COM",
    emoji: "🇰🇲",
    unicode: "U+1F1F0 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg",
  },
  {
    name: "Congo - Brazzaville",
    code: "COG",
    emoji: "🇨🇬",
    unicode: "U+1F1E8 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg",
  },
  {
    name: "Congo - Kinshasa",
    code: "COD",
    emoji: "🇨🇩",
    unicode: "U+1F1E8 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg",
  },
  {
    name: "Costa Rica",
    code: "CRI",
    emoji: "🇨🇷",
    unicode: "U+1F1E8 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg",
  },
  {
    name: "Croatia",
    code: "HRV",
    emoji: "🇭🇷",
    unicode: "U+1F1ED U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
  },
  {
    name: "Cuba",
    code: "CUB",
    emoji: "🇨🇺",
    unicode: "U+1F1E8 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg",
  },
  {
    name: "Curaçao",
    code: "CUW",
    emoji: "🇨🇼",
    unicode: "U+1F1E8 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg",
  },
  {
    name: "Cyprus",
    code: "CYP",
    emoji: "🇨🇾",
    unicode: "U+1F1E8 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg",
  },
  {
    name: "Czechia",
    code: "CZE",
    emoji: "🇨🇿",
    unicode: "U+1F1E8 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg",
  },
  {
    name: "Côte d’Ivoire",
    code: "CIV",
    emoji: "🇨🇮",
    unicode: "U+1F1E8 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg",
  },
  {
    name: "Denmark",
    code: "DNK",
    emoji: "🇩🇰",
    unicode: "U+1F1E9 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg",
  },
  {
    name: "Djibouti",
    code: "DJI",
    emoji: "🇩🇯",
    unicode: "U+1F1E9 U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg",
  },
  {
    name: "Dominica",
    code: "DMA",
    emoji: "🇩🇲",
    unicode: "U+1F1E9 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg",
  },
  {
    name: "Dominican Republic",
    code: "DOM",
    emoji: "🇩🇴",
    unicode: "U+1F1E9 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg",
  },
  {
    name: "Ecuador",
    code: "ECU",
    emoji: "🇪🇨",
    unicode: "U+1F1EA U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg",
  },
  {
    name: "Egypt",
    code: "EGY",
    emoji: "🇪🇬",
    unicode: "U+1F1EA U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg",
  },
  {
    name: "El Salvador",
    code: "SLV",
    emoji: "🇸🇻",
    unicode: "U+1F1F8 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg",
  },

  {
    name: "Equatorial Guinea",
    code: "GNQ",
    emoji: "🇬🇶",
    unicode: "U+1F1EC U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg",
  },
  {
    name: "Eritrea",
    code: "ERI",
    emoji: "🇪🇷",
    unicode: "U+1F1EA U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg",
  },
  {
    name: "Estonia",
    code: "EST",
    emoji: "🇪🇪",
    unicode: "U+1F1EA U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg",
  },
  {
    name: "Eswatini",
    code: "SWZ",
    emoji: "🇸🇿",
    unicode: "U+1F1F8 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg",
  },
  {
    name: "Ethiopia",
    code: "ETH",
    emoji: "🇪🇹",
    unicode: "U+1F1EA U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg",
  },
  {
    name: "Faroe Islands",
    code: "FRO",
    emoji: "🇫🇴",
    unicode: "U+1F1EB U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg",
  },
  {
    name: "Fiji",
    code: "FJI",
    emoji: "🇫🇯",
    unicode: "U+1F1EB U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg",
  },
  {
    name: "Finland",
    code: "FIN",
    emoji: "🇫🇮",
    unicode: "U+1F1EB U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg",
  },
  {
    name: "France",
    code: "FRA",
    emoji: "🇫🇷",
    unicode: "U+1F1EB U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
  },
  {
    name: "French Guiana",
    code: "GUF",
    emoji: "🇬🇫",
    unicode: "U+1F1EC U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg",
  },
  {
    name: "Gabon",
    code: "GAB",
    emoji: "🇬🇦",
    unicode: "U+1F1EC U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg",
  },
  {
    name: "Gambia",
    code: "GMB",
    emoji: "🇬🇲",
    unicode: "U+1F1EC U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg",
  },
  {
    name: "Georgia",
    code: "GEO",
    emoji: "🇬🇪",
    unicode: "U+1F1EC U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg",
  },
  {
    name: "Germany",
    code: "DEU",
    emoji: "🇩🇪",
    unicode: "U+1F1E9 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
  },
  {
    name: "Ghana",
    code: "GHA",
    emoji: "🇬🇭",
    unicode: "U+1F1EC U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg",
  },
  {
    name: "Gibraltar",
    code: "GIB",
    emoji: "🇬🇮",
    unicode: "U+1F1EC U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg",
  },
  {
    name: "Greece",
    code: "GRC",
    emoji: "🇬🇷",
    unicode: "U+1F1EC U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
  },
  {
    name: "Greenland",
    code: "GRL",
    emoji: "🇬🇱",
    unicode: "U+1F1EC U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg",
  },
  {
    name: "Grenada",
    code: "GRD",
    emoji: "🇬🇩",
    unicode: "U+1F1EC U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg",
  },
  {
    name: "Guadeloupe",
    code: "GLP",
    emoji: "🇬🇵",
    unicode: "U+1F1EC U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg",
  },
  {
    name: "Guam",
    code: "GUM",
    emoji: "🇬🇺",
    unicode: "U+1F1EC U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg",
  },
  {
    name: "Guatemala",
    code: "GTM",
    emoji: "🇬🇹",
    unicode: "U+1F1EC U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg",
  },
  {
    name: "Guernsey",
    code: "GGY",
    emoji: "🇬🇬",
    unicode: "U+1F1EC U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg",
  },
  {
    name: "Guinea",
    code: "GIN",
    emoji: "🇬🇳",
    unicode: "U+1F1EC U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg",
  },
  {
    name: "Guinea-Bissau",
    code: "GNB",
    emoji: "🇬🇼",
    unicode: "U+1F1EC U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg",
  },
  {
    name: "Guyana",
    code: "GUY",
    emoji: "🇬🇾",
    unicode: "U+1F1EC U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg",
  },
  {
    name: "Haiti",
    code: "HTI",
    emoji: "🇭🇹",
    unicode: "U+1F1ED U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg",
  },

  {
    name: "Honduras",
    code: "HND",
    emoji: "🇭🇳",
    unicode: "U+1F1ED U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg",
  },
  {
    name: "Hungary",
    code: "HUN",
    emoji: "🇭🇺",
    unicode: "U+1F1ED U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg",
  },
  {
    name: "Iceland",
    code: "ISL",
    emoji: "🇮🇸",
    unicode: "U+1F1EE U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg",
  },
  {
    name: "India",
    code: "IND",
    emoji: "🇮🇳",
    unicode: "U+1F1EE U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
  },
  {
    name: "Indonesia",
    code: "IDN",
    emoji: "🇮🇩",
    unicode: "U+1F1EE U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
  },
  {
    name: "Iran",
    code: "IRN",
    emoji: "🇮🇷",
    unicode: "U+1F1EE U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg",
  },
  {
    name: "Iraq",
    code: "IRQ",
    emoji: "🇮🇶",
    unicode: "U+1F1EE U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg",
  },
  {
    name: "Ireland",
    code: "IRL",
    emoji: "🇮🇪",
    unicode: "U+1F1EE U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg",
  },

  {
    name: "Israel",
    code: "ISR",
    emoji: "🇮🇱",
    unicode: "U+1F1EE U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg",
  },
  {
    name: "Italy",
    code: "ITA",
    emoji: "🇮🇹",
    unicode: "U+1F1EE U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
  },
  {
    name: "Jamaica",
    code: "JAM",
    emoji: "🇯🇲",
    unicode: "U+1F1EF U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg",
  },
  {
    name: "Japan",
    code: "JPN",
    emoji: "🇯🇵",
    unicode: "U+1F1EF U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg",
  },
  {
    name: "Jersey",
    code: "JEY",
    emoji: "🇯🇪",
    unicode: "U+1F1EF U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg",
  },
  {
    name: "Jordan",
    code: "JOR",
    emoji: "🇯🇴",
    unicode: "U+1F1EF U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg",
  },
  {
    name: "Kazakhstan",
    code: "KAZ",
    emoji: "🇰🇿",
    unicode: "U+1F1F0 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg",
  },
  {
    name: "Kenya",
    code: "KEN",
    emoji: "🇰🇪",
    unicode: "U+1F1F0 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg",
  },
  {
    name: "Kiribati",
    code: "KIR",
    emoji: "🇰🇮",
    unicode: "U+1F1F0 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg",
  },
  {
    name: "Kosovo",
    code: "RKS",
    emoji: "🇽🇰",
    unicode: "U+1F1FD U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg",
  },
  {
    name: "Kuwait",
    code: "KWT",
    emoji: "🇰🇼",
    unicode: "U+1F1F0 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg",
  },
  {
    name: "Kyrgyzstan",
    code: "KGZ",
    emoji: "🇰🇬",
    unicode: "U+1F1F0 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg",
  },
  {
    name: "Laos",
    code: "LAO",
    emoji: "🇱🇦",
    unicode: "U+1F1F1 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg",
  },
  {
    name: "Latvia",
    code: "LVA",
    emoji: "🇱🇻",
    unicode: "U+1F1F1 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg",
  },
  {
    name: "Lebanon",
    code: "LBN",
    emoji: "🇱🇧",
    unicode: "U+1F1F1 U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg",
  },
  {
    name: "Lesotho",
    code: "LSO",
    emoji: "🇱🇸",
    unicode: "U+1F1F1 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg",
  },
  {
    name: "Liberia",
    code: "LBR",
    emoji: "🇱🇷",
    unicode: "U+1F1F1 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg",
  },
  {
    name: "Libya",
    code: "LBY",
    emoji: "🇱🇾",
    unicode: "U+1F1F1 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg",
  },
  {
    name: "Liechtenstein",
    code: "LIE",
    emoji: "🇱🇮",
    unicode: "U+1F1F1 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg",
  },
  {
    name: "Lithuania",
    code: "LTU",
    emoji: "🇱🇹",
    unicode: "U+1F1F1 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg",
  },
  {
    name: "Luxembourg",
    code: "LUX",
    emoji: "🇱🇺",
    unicode: "U+1F1F1 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg",
  },
  {
    name: "Macao SAR China",
    code: "MAC",
    emoji: "🇲🇴",
    unicode: "U+1F1F2 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg",
  },
  {
    name: "Madagascar",
    code: "MDG",
    emoji: "🇲🇬",
    unicode: "U+1F1F2 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg",
  },
  {
    name: "Malawi",
    code: "MWI",
    emoji: "🇲🇼",
    unicode: "U+1F1F2 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg",
  },
  {
    name: "Malaysia",
    code: "MYS",
    emoji: "🇲🇾",
    unicode: "U+1F1F2 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg",
  },
  {
    name: "Maldives",
    code: "MDV",
    emoji: "🇲🇻",
    unicode: "U+1F1F2 U+1F1FB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg",
  },
  {
    name: "Mali",
    code: "MLI",
    emoji: "🇲🇱",
    unicode: "U+1F1F2 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg",
  },
  {
    name: "Malta",
    code: "MLT",
    emoji: "🇲🇹",
    unicode: "U+1F1F2 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg",
  },
  {
    name: "Marshall Islands",
    code: "MHL",
    emoji: "🇲🇭",
    unicode: "U+1F1F2 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg",
  },
  {
    name: "Martinique",
    code: "MTQ",
    emoji: "🇲🇶",
    unicode: "U+1F1F2 U+1F1F6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg",
  },
  {
    name: "Mauritania",
    code: "MRT",
    emoji: "🇲🇷",
    unicode: "U+1F1F2 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg",
  },
  {
    name: "Mauritius",
    code: "MUS",
    emoji: "🇲🇺",
    unicode: "U+1F1F2 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg",
  },
  {
    name: "Mayotte",
    code: "MYT",
    emoji: "🇾🇹",
    unicode: "U+1F1FE U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg",
  },
  {
    name: "Mexico",
    code: "MEX",
    emoji: "🇲🇽",
    unicode: "U+1F1F2 U+1F1FD",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg",
  },
  {
    name: "Moldova",
    code: "MDA",
    emoji: "🇲🇩",
    unicode: "U+1F1F2 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg",
  },
  {
    name: "Monaco",
    code: "MCO",
    emoji: "🇲🇨",
    unicode: "U+1F1F2 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg",
  },
  {
    name: "Mongolia",
    code: "MNG",
    emoji: "🇲🇳",
    unicode: "U+1F1F2 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg",
  },
  {
    name: "Montenegro",
    code: "MNE",
    emoji: "🇲🇪",
    unicode: "U+1F1F2 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg",
  },

  {
    name: "Morocco",
    code: "MAR",
    emoji: "🇲🇦",
    unicode: "U+1F1F2 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg",
  },
  {
    name: "Mozambique",
    code: "MOZ",
    emoji: "🇲🇿",
    unicode: "U+1F1F2 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg",
  },
  {
    name: "Myanmar (Burma)",
    code: "MMR",
    emoji: "🇲🇲",
    unicode: "U+1F1F2 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg",
  },
  {
    name: "Namibia",
    code: "NAM",
    emoji: "🇳🇦",
    unicode: "U+1F1F3 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg",
  },

  {
    name: "Nepal",
    code: "NPL",
    emoji: "🇳🇵",
    unicode: "U+1F1F3 U+1F1F5",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg",
  },
  {
    name: "Netherlands",
    code: "NLD",
    emoji: "🇳🇱",
    unicode: "U+1F1F3 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg",
  },

  {
    name: "New Zealand",
    code: "NZL",
    emoji: "🇳🇿",
    unicode: "U+1F1F3 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg",
  },
  {
    name: "Nicaragua",
    code: "NIC",
    emoji: "🇳🇮",
    unicode: "U+1F1F3 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg",
  },
  {
    name: "Niger",
    code: "NER",
    emoji: "🇳🇪",
    unicode: "U+1F1F3 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg",
  },
  {
    name: "Nigeria",
    code: "NGA",
    emoji: "🇳🇬",
    unicode: "U+1F1F3 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
  },

  {
    name: "North Macedonia",
    code: "MKD",
    emoji: "🇲🇰",
    unicode: "U+1F1F2 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg",
  },
  {
    name: "Norway",
    code: "NOR",
    emoji: "🇳🇴",
    unicode: "U+1F1F3 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg",
  },
  {
    name: "Oman",
    code: "OMN",
    emoji: "🇴🇲",
    unicode: "U+1F1F4 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg",
  },
  {
    name: "Pakistan",
    code: "PAK",
    emoji: "🇵🇰",
    unicode: "U+1F1F5 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg",
  },
  {
    name: "Palau",
    code: "PLW",
    emoji: "🇵🇼",
    unicode: "U+1F1F5 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg",
  },

  {
    name: "Panama",
    code: "PAN",
    emoji: "🇵🇦",
    unicode: "U+1F1F5 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg",
  },
  {
    name: "Papua New Guinea",
    code: "PNG",
    emoji: "🇵🇬",
    unicode: "U+1F1F5 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg",
  },
  {
    name: "Paraguay",
    code: "PRY",
    emoji: "🇵🇾",
    unicode: "U+1F1F5 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg",
  },
  {
    name: "Peru",
    code: "PER",
    emoji: "🇵🇪",
    unicode: "U+1F1F5 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg",
  },
  {
    name: "Philippines",
    code: "PHL",
    emoji: "🇵🇭",
    unicode: "U+1F1F5 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg",
  },

  {
    name: "Poland",
    code: "POL",
    emoji: "🇵🇱",
    unicode: "U+1F1F5 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
  },
  {
    name: "Portugal",
    code: "PRT",
    emoji: "🇵🇹",
    unicode: "U+1F1F5 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
  },
  {
    name: "Puerto Rico",
    code: "PRI",
    emoji: "🇵🇷",
    unicode: "U+1F1F5 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg",
  },
  {
    name: "Qatar",
    code: "QAT",
    emoji: "🇶🇦",
    unicode: "U+1F1F6 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg",
  },
  {
    name: "Romania",
    code: "ROU",
    emoji: "🇷🇴",
    unicode: "U+1F1F7 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg",
  },
  {
    name: "Russia",
    code: "RUS",
    emoji: "🇷🇺",
    unicode: "U+1F1F7 U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg",
  },
  {
    name: "Rwanda",
    code: "RWA",
    emoji: "🇷🇼",
    unicode: "U+1F1F7 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg",
  },
  {
    name: "Réunion",
    code: "REU",
    emoji: "🇷🇪",
    unicode: "U+1F1F7 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg",
  },
  {
    name: "Samoa",
    code: "WSM",
    emoji: "🇼🇸",
    unicode: "U+1F1FC U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg",
  },
  {
    name: "San Marino",
    code: "SMR",
    emoji: "🇸🇲",
    unicode: "U+1F1F8 U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg",
  },
  {
    name: "Saudi Arabia",
    code: "SAU",
    emoji: "🇸🇦",
    unicode: "U+1F1F8 U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg",
  },

  {
    name: "Senegal",
    code: "SEN",
    emoji: "🇸🇳",
    unicode: "U+1F1F8 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg",
  },
  {
    name: "Serbia",
    code: "SRB",
    emoji: "🇷🇸",
    unicode: "U+1F1F7 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg",
  },
  {
    name: "Seychelles",
    code: "SYC",
    emoji: "🇸🇨",
    unicode: "U+1F1F8 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg",
  },
  {
    name: "Sierra Leone",
    code: "SLE",
    emoji: "🇸🇱",
    unicode: "U+1F1F8 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg",
  },
  {
    name: "Singapore",
    code: "SGP",
    emoji: "🇸🇬",
    unicode: "U+1F1F8 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg",
  },

  {
    name: "Slovakia",
    code: "SVK",
    emoji: "🇸🇰",
    unicode: "U+1F1F8 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg",
  },
  {
    name: "Slovenia",
    code: "SVN",
    emoji: "🇸🇮",
    unicode: "U+1F1F8 U+1F1EE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg",
  },
  {
    name: "Solomon Islands",
    code: "SLB",
    emoji: "🇸🇧",
    unicode: "U+1F1F8 U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg",
  },
  {
    name: "Somalia",
    code: "SOM",
    emoji: "🇸🇴",
    unicode: "U+1F1F8 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg",
  },
  {
    name: "South Africa",
    code: "ZAF",
    emoji: "🇿🇦",
    unicode: "U+1F1FF U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg",
  },
  {
    name: "South Korea",
    code: "KOR",
    emoji: "🇰🇷",
    unicode: "U+1F1F0 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg",
  },
  {
    name: "South Sudan",
    code: "SSD",
    emoji: "🇸🇸",
    unicode: "U+1F1F8 U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg",
  },
  {
    name: "Spain",
    code: "ESP",
    emoji: "🇪🇸",
    unicode: "U+1F1EA U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
  },
  {
    name: "Sri Lanka",
    code: "LKA",
    emoji: "🇱🇰",
    unicode: "U+1F1F1 U+1F1F0",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg",
  },
  {
    name: "St. Barthélemy",
    code: "BLM",
    emoji: "🇧🇱",
    unicode: "U+1F1E7 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg",
  },

  {
    name: "St. Kitts & Nevis",
    code: "KNA",
    emoji: "🇰🇳",
    unicode: "U+1F1F0 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg",
  },
  {
    name: "St. Lucia",
    code: "LCA",
    emoji: "🇱🇨",
    unicode: "U+1F1F1 U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg",
  },
  {
    name: "St. Martin",
    code: "MAF",
    emoji: "🇲🇫",
    unicode: "U+1F1F2 U+1F1EB",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg",
  },

  {
    name: "St. Vincent & Grenadines",
    code: "VCT",
    emoji: "🇻🇨",
    unicode: "U+1F1FB U+1F1E8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg",
  },
  {
    name: "Sudan",
    code: "SDN",
    emoji: "🇸🇩",
    unicode: "U+1F1F8 U+1F1E9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg",
  },
  {
    name: "Suriname",
    code: "SUR",
    emoji: "🇸🇷",
    unicode: "U+1F1F8 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg",
  },

  {
    name: "Sweden",
    code: "SWE",
    emoji: "🇸🇪",
    unicode: "U+1F1F8 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg",
  },
  {
    name: "Switzerland",
    code: "CHE",
    emoji: "🇨🇭",
    unicode: "U+1F1E8 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg",
  },
  {
    name: "Syria",
    code: "SYR",
    emoji: "🇸🇾",
    unicode: "U+1F1F8 U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg",
  },
  {
    name: "São Tomé & Príncipe",
    code: "STP",
    emoji: "🇸🇹",
    unicode: "U+1F1F8 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg",
  },
  {
    name: "Taiwan",
    code: "TWN",
    emoji: "🇹🇼",
    unicode: "U+1F1F9 U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg",
  },
  {
    name: "Tajikistan",
    code: "TJK",
    emoji: "🇹🇯",
    unicode: "U+1F1F9 U+1F1EF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg",
  },
  {
    name: "Tanzania",
    code: "TZA",
    emoji: "🇹🇿",
    unicode: "U+1F1F9 U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg",
  },
  {
    name: "Thailand",
    code: "THA",
    emoji: "🇹🇭",
    unicode: "U+1F1F9 U+1F1ED",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg",
  },
  {
    name: "Timor-Leste",
    code: "TLS",
    emoji: "🇹🇱",
    unicode: "U+1F1F9 U+1F1F1",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg",
  },
  {
    name: "Togo",
    code: "TGO",
    emoji: "🇹🇬",
    unicode: "U+1F1F9 U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg",
  },
  {
    name: "Tonga",
    code: "TON",
    emoji: "🇹🇴",
    unicode: "U+1F1F9 U+1F1F4",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg",
  },
  {
    name: "Trinidad & Tobago",
    code: "TTO",
    emoji: "🇹🇹",
    unicode: "U+1F1F9 U+1F1F9",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg",
  },
  {
    name: "Tunisia",
    code: "TUN",
    emoji: "🇹🇳",
    unicode: "U+1F1F9 U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg",
  },
  {
    name: "Turkey",
    code: "TUR",
    emoji: "🇹🇷",
    unicode: "U+1F1F9 U+1F1F7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg",
  },
  {
    name: "Uganda",
    code: "UGA",
    emoji: "🇺🇬",
    unicode: "U+1F1FA U+1F1EC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg",
  },
  {
    name: "Ukraine",
    code: "UKR",
    emoji: "🇺🇦",
    unicode: "U+1F1FA U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg",
  },
  {
    name: "United Arab Emirates",
    code: "ARE",
    emoji: "🇦🇪",
    unicode: "U+1F1E6 U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg",
  },
  {
    name: "United Kingdom",
    code: "GBR",
    emoji: "🇬🇧",
    unicode: "U+1F1EC U+1F1E7",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg",
  },
  {
    name: "United States",
    code: "USA",
    emoji: "🇺🇸",
    unicode: "U+1F1FA U+1F1F8",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
  },
  {
    name: "Uruguay",
    code: "URY",
    emoji: "🇺🇾",
    unicode: "U+1F1FA U+1F1FE",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg",
  },
  {
    name: "Uzbekistan",
    code: "UZB",
    emoji: "🇺🇿",
    unicode: "U+1F1FA U+1F1FF",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
  },
  {
    name: "Vanuatu",
    code: "VUT",
    emoji: "🇻🇺",
    unicode: "U+1F1FB U+1F1FA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg",
  },
  {
    name: "Vatican City",
    code: "VAT",
    emoji: "🇻🇦",
    unicode: "U+1F1FB U+1F1E6",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg",
  },
  {
    name: "Venezuela",
    code: "VEN",
    emoji: "🇻🇪",
    unicode: "U+1F1FB U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg",
  },
  {
    name: "Vietnam",
    code: "VNM",
    emoji: "🇻🇳",
    unicode: "U+1F1FB U+1F1F3",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg",
  },
  {
    name: "Yemen",
    code: "YEM",
    emoji: "🇾🇪",
    unicode: "U+1F1FE U+1F1EA",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg",
  },
  {
    name: "Zambia",
    code: "ZMB",
    emoji: "🇿🇲",
    unicode: "U+1F1FF U+1F1F2",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg",
  },
  {
    name: "Zimbabwe",
    code: "ZWE",
    emoji: "🇿🇼",
    unicode: "U+1F1FF U+1F1FC",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg",
  },
];
export { countries };
