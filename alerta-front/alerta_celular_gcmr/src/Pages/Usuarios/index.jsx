import { useEffect, useState } from "react"
import conn from "../../Requisicoes/conn"
import { CardUsuario } from "../../Components/CardUsuario"

// const lista = [
//     {
//         "nome": "GABRIELA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353763692046416",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "LEA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350320122214982",
//         "imei2": "",
//         "modelo": "S20"
//     },
//     {
//         "nome": "ROSELI",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353600811419373",
//         "imei2": "",
//         "modelo": "A03"
//     },
//     {
//         "nome": "SANDRA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358558826792942",
//         "imei2": "",
//         "modelo": "S20"
//     },
//     {
//         "nome": "ADRIANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358558827175105",
//         "imei2": "",
//         "modelo": "S20"
//     },
//     {
//         "nome": "MARILENE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356355993383192",
//         "imei2": "",
//         "modelo": "MOTO E40"
//     },
//     {
//         "nome": "MARIA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350321131940773",
//         "imei2": "",
//         "modelo": "TECNO SPARK 6 GO"
//     },
//     {
//         "nome": "LEONIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "869582063507072",
//         "imei2": "",
//         "modelo": "POCO M5S"
//     },
//     {
//         "nome": "ZILMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353090101877458",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "SANDRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356826110374822",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "ADRIANO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "868321065997158",
//         "imei2": "",
//         "modelo": "REDMI NOTE 12 PRO"
//     },
//     {
//         "nome": "SUZANA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356159118729742",
//         "imei2": "",
//         "modelo": "A 31"
//     },
//     {
//         "nome": "FRANCISCO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351371810291476",
//         "imei2": "",
//         "modelo": "S23"
//     },
//     {
//         "nome": "MARIA EUGENIA",
//         "cidade": "TORONTO",
//         "estado": "ON",
//         "escolaridade": "MESTRADO",
//         "nascimento": "",
//         "imei1": "35581845634879",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "VANESSA SILVA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35614009263990",
//         "imei2": "",
//         "modelo": "IPHOONE 06"
//     },
//     {
//         "nome": "MARILÍA VIEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "352381814891303",
//         "imei2": "",
//         "modelo": "IPHONE14"
//     },
//     {
//         "nome": "HANDRÉA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358958556331632",
//         "imei2": "",
//         "modelo": "SANSUNG A 14"
//     },
//     {
//         "nome": "GIOVANNI",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356141103716678",
//         "imei2": "",
//         "modelo": "SANSUNG A30"
//     },
//     {
//         "nome": "CLÁUDIO EDUARDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351443916155127",
//         "imei2": "",
//         "modelo": "INFINIX X669C"
//     },
//     {
//         "nome": "JULIANA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352432985219277",
//         "imei2": "",
//         "modelo": "GALAXY A11"
//     },
//     {
//         "nome": "MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353623111489359",
//         "imei2": "",
//         "modelo": "MOTO G8 POWER"
//     },
//     {
//         "nome": "ROSÂNGELA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353600815399241",
//         "imei2": "",
//         "modelo": "GALAXY A13"
//     },
//     {
//         "nome": "Jhon HERMES",
//         "cidade": "SÃO LUÍS",
//         "estado": "MA",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351479722829893",
//         "imei2": "",
//         "modelo": "IPHONE 15 PRO MAX"
//     },
//     {
//         "nome": "DANIEL TADEU",
//         "cidade": "BELÉM",
//         "estado": "PA",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35530120038995801",
//         "imei2": "",
//         "modelo": "SANSUNG A73"
//     },
//     {
//         "nome": "JEFFERSON",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "864010063350569",
//         "imei2": "",
//         "modelo": "REDMI NOTE 12"
//     },
//     {
//         "nome": "CHARLENE",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "862157065898202",
//         "imei2": "",
//         "modelo": "REDMI NOTE 12"
//     },
//     {
//         "nome": "CARLANE",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352177392428835",
//         "imei2": "",
//         "modelo": "GALAXY A13"
//     },
//     {
//         "nome": "LEANDRO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "355109413909615",
//         "imei2": "",
//         "modelo": "MOTO G53"
//     },
//     {
//         "nome": "LAÍS TAVARES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355015106959371",
//         "imei2": "",
//         "modelo": "SANSUNG S10 E"
//     },
//     {
//         "nome": "TANIA TAVARES",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352967355478219",
//         "imei2": "",
//         "modelo": "SANSUNG A 13"
//     },
//     {
//         "nome": "ISABELLA SOARES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356429100064717",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "LEVINO",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350603380910007",
//         "imei2": "",
//         "modelo": "SANSUNG A 53"
//     },
//     {
//         "nome": "RANILSA DIAS",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351328053079950",
//         "imei2": "",
//         "modelo": "MOTO G 82"
//     },
//     {
//         "nome": "LAURA OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356417992746111",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "BRUNA FONSECA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352355509897486",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "ROSSANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356141104812641",
//         "imei2": "",
//         "modelo": "SANSUNG A30"
//     },
//     {
//         "nome": "RONYERISON",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357461101200726",
//         "imei2": "",
//         "modelo": "GALAXY M31"
//     },
//     {
//         "nome": "EVELYNE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355253113323568",
//         "imei2": "",
//         "modelo": "GALAXY M31"
//     },
//     {
//         "nome": "DIMAS",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354187774835935",
//         "imei2": "",
//         "modelo": "MOTO E13"
//     },
//     {
//         "nome": "FLAVIO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356563085417712",
//         "imei2": "",
//         "modelo": "IPHONE 5"
//     },
//     {
//         "nome": "EGLINE MUNIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358190161106536",
//         "imei2": "",
//         "modelo": "MOTO G20"
//     },
//     {
//         "nome": "EDILEUZA NUNES",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354624107730722",
//         "imei2": "",
//         "modelo": "SAMSUNG S10"
//     },
//     {
//         "nome": "OLIVIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353775370532608",
//         "imei2": "",
//         "modelo": "SAMSUNG A73"
//     },
//     {
//         "nome": "MARIA EDUARDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357414197671961",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO MAX"
//     },
//     {
//         "nome": "TATIANA AMORIM",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351406756404186",
//         "imei2": "",
//         "modelo": "SAMSUNG A34"
//     },
//     {
//         "nome": "ARYELLY SOARES",
//         "cidade": "PATOS",
//         "estado": "PB",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "35011233798493",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "EDILENE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359111105579264",
//         "imei2": "",
//         "modelo": "MOTOG8"
//     },
//     {
//         "nome": "ANNE HIGAKI",
//         "cidade": "MIRACEMA",
//         "estado": "TO",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350905825382159",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO"
//     },
//     {
//         "nome": "BRUNA ALVES",
//         "cidade": "MIRACEMA",
//         "estado": "TO",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356485105782174",
//         "imei2": "",
//         "modelo": "IPHONE SE 2ºGERAÇÃO"
//     },
//     {
//         "nome": "SOFIA SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "3531171122314653",
//         "imei2": "",
//         "modelo": "SANSUNG A14"
//     },
//     {
//         "nome": "JAYNE FRANÇA",
//         "cidade": "QUIXADÁ",
//         "estado": "CE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358209596644307",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "ARACELY MOTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354187774917030",
//         "imei2": "",
//         "modelo": "MOTOROLA E13"
//     },
//     {
//         "nome": "MARGARIDA SILVA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "867407059304195",
//         "imei2": "",
//         "modelo": "REDMI NOTE 9 PRO"
//     },
//     {
//         "nome": "CLAUDIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "867631068101967",
//         "imei2": "",
//         "modelo": "POCO X4 PRO"
//     },
//     {
//         "nome": "LAÍS SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353684126159734",
//         "imei2": "",
//         "modelo": "GALAXY NOTE 20"
//     },
//     {
//         "nome": "VIRGÍNIA PORTELA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357772783177234",
//         "imei2": "",
//         "modelo": "MOTO G60"
//     },
//     {
//         "nome": "WILSON JOSÉ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "868688060793257",
//         "imei2": "",
//         "modelo": "REDMI 10"
//     },
//     {
//         "nome": "GLEIDSON REGO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "368774504172675",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "GIRLAYNE REGO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "352883112720787",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "MARCÍLIO DOMINGOS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357459108464618",
//         "imei2": "",
//         "modelo": "SAMSUNG A51"
//     },
//     {
//         "nome": "ANDREIA BRITO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355063661325729",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "SERGIO",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350916872439222",
//         "imei2": "",
//         "modelo": "SANSUNG A03"
//     },
//     {
//         "nome": "ANA PAULA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356159112874734",
//         "imei2": "",
//         "modelo": "SAMSUNG A31"
//     },
//     {
//         "nome": "VERA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355293215025919",
//         "imei2": "",
//         "modelo": "SAMSUNG S24"
//     },
//     {
//         "nome": "MARILIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357853680560902",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO MAX"
//     },
//     {
//         "nome": "GISANE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350948905755258",
//         "imei2": "",
//         "modelo": "SAMSUNG S21"
//     },
//     {
//         "nome": "JOSÉ ALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354267090552891",
//         "imei2": "",
//         "modelo": "SAMSUNG S9"
//     },
//     {
//         "nome": "CAMILA SANTANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "351701231385541",
//         "imei2": "",
//         "modelo": "TECNO POP"
//     },
//     {
//         "nome": "ADRESSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "868379064527822",
//         "imei2": "",
//         "modelo": "REDMI NOTE 12"
//     },
//     {
//         "nome": "ANTÔNIO FILHO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350528721501076",
//         "imei2": "",
//         "modelo": "SAMSUNG A14"
//     },
//     {
//         "nome": "ANA PAULA SILVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356159112874434",
//         "imei2": "",
//         "modelo": "SAMSUNG A31"
//     },
//     {
//         "nome": "ANA MARIA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355565702832356",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO"
//     },
//     {
//         "nome": "KEILA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350566102645302",
//         "imei2": "",
//         "modelo": "IPHONE 13 PRO MAX"
//     },
//     {
//         "nome": "LEONARDO",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354702110342261",
//         "imei2": "",
//         "modelo": "SAMSUNG A72"
//     },
//     {
//         "nome": "VANESSA",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354103130165818",
//         "imei2": "",
//         "modelo": "SAMSUNG 522"
//     },
//     {
//         "nome": "PEDRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355638852350980",
//         "imei2": "",
//         "modelo": "SAMSUNG A14"
//     },
//     {
//         "nome": "GEYSON",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "860414066202104",
//         "imei2": "",
//         "modelo": "XIAOME POCO XS PRO"
//     },
//     {
//         "nome": "EDLEUSA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35040242310426",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "GUALTER RAMOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350828560501322",
//         "imei2": "",
//         "modelo": "SAMSUNG S23 ULTRA"
//     },
//     {
//         "nome": "NATALY",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358839819832618",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "NATHALIA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359673359355501",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "ISABELLA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350160480530656",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "GUILHERME",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354006104222731",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "EDUARDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354156120730959",
//         "imei2": "",
//         "modelo": "GALAXY ZFOLD2 5G"
//     },
//     {
//         "nome": "JOÃO CORREIA-BA",
//         "cidade": "MACEIÓ",
//         "estado": "AL",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "357923215650260",
//         "imei2": "",
//         "modelo": "IPHONR 11"
//     },
//     {
//         "nome": "RAISSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357154677830675",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO"
//     },
//     {
//         "nome": "VIVIAN",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353594116957791",
//         "imei2": "",
//         "modelo": "MOTOG8"
//     },
//     {
//         "nome": "NAAMAATALIA",
//         "cidade": "JOÃO PESSOA",
//         "estado": "PB",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "359498088116523",
//         "imei2": "",
//         "modelo": "IPHONE 8"
//     },
//     {
//         "nome": "BIANCA",
//         "cidade": "SÃO PAULO",
//         "estado": "SP",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351843194755185",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "DANYLLA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353494812863692",
//         "imei2": "",
//         "modelo": "SAMSUNG S10 MAX"
//     },
//     {
//         "nome": "SEBASTIÃO",
//         "cidade": "NATAL",
//         "estado": "RN",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356544395413732",
//         "imei2": "",
//         "modelo": "MOTOROLA EDGE DEL 40"
//     },
//     {
//         "nome": "EDLEUSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "MESTRADO",
//         "nascimento": "",
//         "imei1": "352081301183293",
//         "imei2": "",
//         "modelo": "SAMSUNG J7"
//     },
//     {
//         "nome": "KELSON",
//         "cidade": "SÃO PAULO",
//         "estado": "SP",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357847400120740",
//         "imei2": "",
//         "modelo": "GALAXY A03 CORE"
//     },
//     {
//         "nome": "SARA SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866229060758925",
//         "imei2": "",
//         "modelo": "REDMI NOTE 12"
//     },
//     {
//         "nome": "EDMILSON LIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357239735050570",
//         "imei2": "",
//         "modelo": "MOTO G7"
//     },
//     {
//         "nome": "BRUNO ALBUQUERQUE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "357461101566266",
//         "imei2": "",
//         "modelo": "GALAXY A 50"
//     },
//     {
//         "nome": "MARCELA ALBUQUERQUE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354103135183600",
//         "imei2": "",
//         "modelo": "GALAXY S22"
//     },
//     {
//         "nome": "RAFAEL",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350596816823499",
//         "imei2": "",
//         "modelo": "MOTO G53"
//     },
//     {
//         "nome": "DENNIS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353156100542581",
//         "imei2": "",
//         "modelo": "IPHONE X"
//     },
//     {
//         "nome": "ÁLVARO",
//         "cidade": "CARUARU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356969672882806",
//         "imei2": "",
//         "modelo": "GALAXY A14"
//     },
//     {
//         "nome": "JOELMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353046281695227",
//         "imei2": "",
//         "modelo": "GALAXY 22S"
//     },
//     {
//         "nome": "RAPHAEL SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353909594618220",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO"
//     },
//     {
//         "nome": "MARIA CABRAL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357221101243450",
//         "imei2": "",
//         "modelo": "MOTO ONE HYPER"
//     },
//     {
//         "nome": "SUELY SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355100980802788",
//         "imei2": "",
//         "modelo": "GALAXY A34"
//     },
//     {
//         "nome": "HAICHA SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "868026060438831",
//         "imei2": "",
//         "modelo": "REALM C55"
//     },
//     {
//         "nome": "FRANCIELLE SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353171125994873",
//         "imei2": "",
//         "modelo": "GALAXY A14"
//     },
//     {
//         "nome": "STEPHANY SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358668083086043",
//         "imei2": "",
//         "modelo": "GALAXY A 58"
//     },
//     {
//         "nome": "MARIA OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "353065224543583",
//         "imei2": "",
//         "modelo": "GALAXY M54 5G"
//     },
//     {
//         "nome": "DANILO CAMPOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350098277582321",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "FELIPE AVELINO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "863102046132759",
//         "imei2": "",
//         "modelo": "REDMI NOTE 8"
//     },
//     {
//         "nome": "BRUNO SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352763102481733",
//         "imei2": "",
//         "modelo": "LG K12+"
//     },
//     {
//         "nome": "ANDRÉA SOUSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355877332160730",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "DANILO ANDERSON",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356282683021647",
//         "imei2": "",
//         "modelo": "GALAXY M53"
//     },
//     {
//         "nome": "PRISCILA SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350948905203168",
//         "imei2": "",
//         "modelo": "GALAXY S21"
//     },
//     {
//         "nome": "FERNANDA SANTIAGO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352989094618889",
//         "imei2": "",
//         "modelo": "IPHONE 8"
//     },
//     {
//         "nome": "GLEISON GOMES",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "250069700717623",
//         "imei2": "",
//         "modelo": "IPHONE 15 PRO MAX"
//     },
//     {
//         "nome": "MARIA KARAN",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357140405045777",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "JOÃO CASTRO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356727118574472",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO"
//     },
//     {
//         "nome": "MÁCIA JERÔNIMO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356458102977360",
//         "imei2": "",
//         "modelo": "IPHONE X"
//     },
//     {
//         "nome": "MARIA EDUARDA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357619539003810",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "ALLAN PESSOA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356872110575935",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "EDSON SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358664882377253",
//         "imei2": "",
//         "modelo": "MOTOGS62"
//     },
//     {
//         "nome": "BRUNO MONTEIRO",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351799221450671",
//         "imei2": "",
//         "modelo": "MOTO G53"
//     },
//     {
//         "nome": "JEMERSON ROSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355560112623917",
//         "imei2": "",
//         "modelo": "MOTO G 93"
//     },
//     {
//         "nome": "ERIMAX BARBOSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356428107592993",
//         "imei2": "",
//         "modelo": "IPHONE X"
//     },
//     {
//         "nome": "ANDRÉ OLIVEIRA",
//         "cidade": "JOÃO PESSOA",
//         "estado": "PB",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "865869054623881",
//         "imei2": "",
//         "modelo": "M11 LITE"
//     },
//     {
//         "nome": "LEONARDO NASCIMENTO",
//         "cidade": "JOÃO PESSOA",
//         "estado": "PB",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357799157838398",
//         "imei2": "",
//         "modelo": "GALAXY A 54"
//     },
//     {
//         "nome": "ELAINE HOLANDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353082100686576",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "JOHN HOLANDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351055825318693",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO"
//     },
//     {
//         "nome": "ANA CORREIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353968106061139",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "EVENDRO ALBUQUERQUE",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353568251173307",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "MANOEL SEBASTIÃO",
//         "cidade": "FORTALEZA",
//         "estado": "CE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356544398683067",
//         "imei2": "",
//         "modelo": "GALAXY A 54"
//     },
//     {
//         "nome": "TEODOLINO HIRAMINE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354103136415167",
//         "imei2": "",
//         "modelo": "MOTO G20"
//     },
//     {
//         "nome": "FELIPE KAUÃ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359925995486771",
//         "imei2": "",
//         "modelo": "MOTO G7"
//     },
//     {
//         "nome": "JULIA CRISTINE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358190166496072",
//         "imei2": "",
//         "modelo": "MOTO G20"
//     },
//     {
//         "nome": "CARLOS EDUARDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354494578370832",
//         "imei2": "",
//         "modelo": "MOTO G20"
//     },
//     {
//         "nome": "EDVE SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357799150414320",
//         "imei2": "",
//         "modelo": "GALAXY A 54"
//     },
//     {
//         "nome": "ANTONIO EUGENIO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353046282786827",
//         "imei2": "",
//         "modelo": "SAMSUNG A22"
//     },
//     {
//         "nome": "ANA CARLA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "352992115168926",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "CLECIA DE SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354327116928317",
//         "imei2": "",
//         "modelo": "LG K61"
//     },
//     {
//         "nome": "ANTONIO MALTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350603381739686",
//         "imei2": "",
//         "modelo": "SAMSUNG A52"
//     },
//     {
//         "nome": "MARIA THEREZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357526613037590",
//         "imei2": "",
//         "modelo": "SAMSUNG A52"
//     },
//     {
//         "nome": "GILBERTO DE SOUUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353269421403456",
//         "imei2": "",
//         "modelo": "SAMSUNG A32"
//     },
//     {
//         "nome": "LUCILIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "868441069722962",
//         "imei2": "",
//         "modelo": "REDMI NOT11"
//     },
//     {
//         "nome": "BEATRIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353269421451448",
//         "imei2": "",
//         "modelo": "SAMSUNG A32"
//     },
//     {
//         "nome": "RAQUEL SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "350823460486088",
//         "imei2": "",
//         "modelo": "GALAXY s23"
//     },
//     {
//         "nome": "MARCELO BARBOSA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351616747250239",
//         "imei2": "",
//         "modelo": "MOTOG30"
//     },
//     {
//         "nome": "ELIV LINS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353969104613103",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "ELIZA LINS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356159119846792",
//         "imei2": "",
//         "modelo": "SAMSUNG A31"
//     },
//     {
//         "nome": "MURIEL",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354103135324162",
//         "imei2": "",
//         "modelo": "SAMSUNG S22"
//     },
//     {
//         "nome": "CYBELLE LEDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354828356960399",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "ALBERTO JOSÉ",
//         "cidade": "MACEIÓ",
//         "estado": "AL",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356544396533017",
//         "imei2": "",
//         "modelo": "GALAXY A54"
//     },
//     {
//         "nome": "GEORGINA RIBEIRO",
//         "cidade": "RIO DE JANEIRO",
//         "estado": "RJ",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356150113566130",
//         "imei2": "",
//         "modelo": "SAMSUNG A31"
//     },
//     {
//         "nome": "AMARO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "359137279543653",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "HELAINE",
//         "cidade": "FORTALEZA",
//         "estado": "CE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358989498735713",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "ISABEL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351331728560966",
//         "imei2": "",
//         "modelo": "GALAXY S21FE"
//     },
//     {
//         "nome": "ALCIONE FRANCISCA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353975104302712",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "FELIPE MAUÉS",
//         "cidade": "BELÉM",
//         "estado": "PA",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355846120003550",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "ALEXANDRE AYRES",
//         "cidade": "BELÉM",
//         "estado": "PA",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350992327017541",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "THAYS MARQUES",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "861267062761484",
//         "imei2": "",
//         "modelo": "XIAMO LITE 12"
//     },
//     {
//         "nome": "IRAN",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353874233008375",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "TATYANE MARQUES",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "8612670627795885",
//         "imei2": "",
//         "modelo": "XIAMO LITE 12"
//     },
//     {
//         "nome": "FRANCISO XAVIER",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "3531711284258670",
//         "imei2": "",
//         "modelo": "GALAXY A14"
//     },
//     {
//         "nome": "MARCIA ANDREIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "862468050088802",
//         "imei2": "",
//         "modelo": "REDMI NOTE 10"
//     },
//     {
//         "nome": "SUELY LOPES",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "861276056787843",
//         "imei2": "",
//         "modelo": "REDMI NOTE 8"
//     },
//     {
//         "nome": "BRENDA THAMIRYS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351890922617732",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "DOUGLAS ARAUJO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356460103607053",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "MARIA LUIZA",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356560973509097",
//         "imei2": "",
//         "modelo": "MOTO G60"
//     },
//     {
//         "nome": "IASMIM SANTANA",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353340196288628",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "MATEUS DANTAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "350456240237255",
//         "imei2": "",
//         "modelo": "SAMSUNG S20 FE"
//     },
//     {
//         "nome": "MARIA JOSE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358310092779066",
//         "imei2": "",
//         "modelo": "J5 PRIME"
//     },
//     {
//         "nome": "VALDIVIO LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "862541040289415",
//         "imei2": "",
//         "modelo": "XIAOMI MI A3"
//     },
//     {
//         "nome": "KELEN SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350456081440026",
//         "imei2": "",
//         "modelo": "POSITIVO TWIST 4"
//     },
//     {
//         "nome": "VIVIANE VASCONCELOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356130119613003",
//         "imei2": "",
//         "modelo": "GALAXY A01"
//     },
//     {
//         "nome": "TAMISA POLLYANNA",
//         "cidade": "SURUBIM",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354158080412354",
//         "imei2": "",
//         "modelo": "J7 PRIME"
//     },
//     {
//         "nome": "LARISSA FREIRE",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357650613602375",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO MAX"
//     },
//     {
//         "nome": "VANESSA NEVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352045734776425",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "JAVAN EVANGELISTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351989272092767",
//         "imei2": "",
//         "modelo": "GALAXY A03"
//     },
//     {
//         "nome": "CHARLANE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353448665983445",
//         "imei2": "",
//         "modelo": "MOTO G 20"
//     },
//     {
//         "nome": "BIANCA AMELIA",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356826114623273",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "BARBARA AMELIA",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "359410083124691",
//         "imei2": "",
//         "modelo": "IPHONE X"
//     },
//     {
//         "nome": "DARLENE MIRANDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356697214185137",
//         "imei2": "",
//         "modelo": "SAMSUNG S21"
//     },
//     {
//         "nome": "JUAREZ SILVA",
//         "cidade": "CARPINA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352995101922925",
//         "imei2": "",
//         "modelo": "GALAXY J6"
//     },
//     {
//         "nome": "POLIANA GUIMARÃES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353065223641222",
//         "imei2": "",
//         "modelo": "SAMSUNG GALAXY M54"
//     },
//     {
//         "nome": "MÔNICA CRUZ",
//         "cidade": "PETROLINA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "AUXILIO INSTRUÇÃO",
//         "imei2": "",
//         "modelo": "SAMSUNG"
//     },
//     {
//         "nome": "BARBARA AMELIA (2)",
//         "cidade": "PETROLINA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355317931655814",
//         "imei2": "",
//         "modelo": "IPHONE X"
//     },
//     {
//         "nome": "MARCELINO CARLOS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353448663131096",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "JACQUELINE SOBRAL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354244473977557",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "MARIA DE FATIMA",
//         "cidade": "ARCOVERDE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356130111355811",
//         "imei2": "",
//         "modelo": "SAMSUNG A 01"
//     },
//     {
//         "nome": "NIANE ALINE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "3578255081074626",
//         "imei2": "",
//         "modelo": "SAMSUNG S08"
//     },
//     {
//         "nome": "WILLIANS JOSÉ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "358467732176630",
//         "imei2": "",
//         "modelo": "MOTO G 31"
//     },
//     {
//         "nome": "ANA PAULA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355165988583631",
//         "imei2": "",
//         "modelo": "MOTO E22"
//     },
//     {
//         "nome": "CAMILA SANTANA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350864488415279",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "JOÃO JOSÉ",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354547677373732",
//         "imei2": "",
//         "modelo": "MOTO G42"
//     },
//     {
//         "nome": "ANA PAULA OLIVEIRA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355165988583631",
//         "imei2": "",
//         "modelo": "MOTO E22"
//     },
//     {
//         "nome": "RAFAEL VIEIRA",
//         "cidade": "ARAPIRACA",
//         "estado": "AL",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353067112665718",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "JOSEBIAS PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354936853503974",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "HELDER SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356110095400757",
//         "imei2": "",
//         "modelo": "IPHONE 8"
//     },
//     {
//         "nome": "LUANA DANIELE",
//         "cidade": "NATAL",
//         "estado": "RN",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355018172927306",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO MAX"
//     },
//     {
//         "nome": "THAISSA LUANNA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866044057140106",
//         "imei2": "",
//         "modelo": "REDMI NOT8"
//     },
//     {
//         "nome": "SOLANGE DE OLIVEIRA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351829094692008",
//         "imei2": "",
//         "modelo": "MOTO G5"
//     },
//     {
//         "nome": "OSCAR TORRES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356544395817908",
//         "imei2": "",
//         "modelo": "SAMSUNG A54"
//     },
//     {
//         "nome": "ALBERTO DINIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358664884024432",
//         "imei2": "",
//         "modelo": "MOTO G62"
//     },
//     {
//         "nome": "ALEX LIMA",
//         "cidade": "GRAVATÁ",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351742730538719",
//         "imei2": "",
//         "modelo": "SANSUNG S23 ULTRA"
//     },
//     {
//         "nome": "JOSE MAURICIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "-",
//         "imei2": "",
//         "modelo": "MOTO G 7"
//     },
//     {
//         "nome": "ROSANA SANTOS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350612163581098",
//         "imei2": "",
//         "modelo": "MOTO G 23"
//     },
//     {
//         "nome": "LUCAS SOUZA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356435108187822",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "JANAINA ARAUJO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357138165960599",
//         "imei2": "",
//         "modelo": "MOTO G52"
//     },
//     {
//         "nome": "LAURA MOTA",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356579105557600",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "BRENO MENEZES",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353960261918229",
//         "imei2": "",
//         "modelo": "SAMSUNG S20 FE"
//     },
//     {
//         "nome": "ALAN DAMASCENA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "860969057254935",
//         "imei2": "",
//         "modelo": "REDMI NOT9"
//     },
//     {
//         "nome": "JOSÉ MACIEL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355908108450904",
//         "imei2": "",
//         "modelo": "GALAXY A20"
//     },
//     {
//         "nome": "JOSÉ OLIVEIRA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "868360057125246",
//         "imei2": "",
//         "modelo": "REDMI NOT9"
//     },
//     {
//         "nome": "EMERSON ARRUDA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358664884161994",
//         "imei2": "",
//         "modelo": "MOTO62 5G"
//     },
//     {
//         "nome": "MAUFRIZIA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354240793833215",
//         "imei2": "",
//         "modelo": "K62+"
//     },
//     {
//         "nome": "FELIPE NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "861383048559056",
//         "imei2": "",
//         "modelo": "XIAOMI 9T"
//     },
//     {
//         "nome": "PEDRO REGO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "352672769781881",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "FERNANDO OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356721691790563",
//         "imei2": "",
//         "modelo": "A01"
//     },
//     {
//         "nome": "Marcos Daniel",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "358147198534437",
//         "imei2": "",
//         "modelo": "MOTO E 7 PAWER"
//     },
//     {
//         "nome": "Fatima Maria",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358795107364617",
//         "imei2": "",
//         "modelo": "SAMSUNG A10"
//     },
//     {
//         "nome": "Regildo Lins",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35901332610858",
//         "imei2": "",
//         "modelo": "MOTO G 100"
//     },
//     {
//         "nome": "JEAN SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358439962146955",
//         "imei2": "",
//         "modelo": "MOTO E20"
//     },
//     {
//         "nome": "RUAN SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL INCOMPLETO",
//         "nascimento": "",
//         "imei1": "358439961625157",
//         "imei2": "",
//         "modelo": "MOTO E20"
//     },
//     {
//         "nome": "HOSANA OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358234538724116",
//         "imei2": "",
//         "modelo": "MOTO G30"
//     },
//     {
//         "nome": "HELTON ALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350596814142579",
//         "imei2": "",
//         "modelo": "MOTO G53"
//     },
//     {
//         "nome": "DIEGO FERRAZ",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350456243229390",
//         "imei2": "",
//         "modelo": "GALAXY S20FE"
//     },
//     {
//         "nome": "CISENANDO COSTA",
//         "cidade": "JOÃO PESSOA",
//         "estado": "PB",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353121923072513",
//         "imei2": "",
//         "modelo": "MOTOROLA EDI 20"
//     },
//     {
//         "nome": "THAYANNE FERRAZ",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356452104619930",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "ANDREIA BORGES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "357848535146238",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "HELENA LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351004646311677",
//         "imei2": "",
//         "modelo": "SANSUNG A14"
//     },
//     {
//         "nome": "ALANA TEREZA NERY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356544398185097",
//         "imei2": "",
//         "modelo": "SANSUNGA54"
//     },
//     {
//         "nome": "EDEM SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "867129050970432",
//         "imei2": "",
//         "modelo": "XIAOMI 12T"
//     },
//     {
//         "nome": "JOSÉ JÚNIOR",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357372678185093",
//         "imei2": "",
//         "modelo": "GALAXY A32"
//     },
//     {
//         "nome": "REINALDO MARQUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350915063332725",
//         "imei2": "",
//         "modelo": "GALAXY A04S"
//     },
//     {
//         "nome": "RICARDO MELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358234536412854",
//         "imei2": "",
//         "modelo": "MOTO G30"
//     },
//     {
//         "nome": "MARIA LUIZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "3566977214862206",
//         "imei2": "",
//         "modelo": "GALAXY A21S"
//     },
//     {
//         "nome": "JOSÉ ROBERTO",
//         "cidade": "BOM JARDIM",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "862407050823602",
//         "imei2": "",
//         "modelo": "REDMI NOTE 10 PRO"
//     },
//     {
//         "nome": "MONICA QUEIROZ",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "356450526884066",
//         "imei2": "",
//         "modelo": "SANSUNG A14"
//     },
//     {
//         "nome": "FABIANA NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "ATENDIMENTO",
//         "imei2": "",
//         "modelo": "MOTO G53"
//     },
//     {
//         "nome": "MARIA LUIZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350312160875816",
//         "imei2": "",
//         "modelo": "MOTO G 23"
//     },
//     {
//         "nome": "KATIA OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356544398710175",
//         "imei2": "",
//         "modelo": "SANSUNG A54"
//     },
//     {
//         "nome": "VIEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350528722867849",
//         "imei2": "",
//         "modelo": "MOTO A 134"
//     },
//     {
//         "nome": "MIGUEL PAIVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351057066938032",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "RAMON LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "864722051175648",
//         "imei2": "",
//         "modelo": "XIAOMI 11TPRO"
//     },
//     {
//         "nome": "BRUNO QUEIROZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353864164098529",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "STEPHANIE SASKYA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358615316678435",
//         "imei2": "",
//         "modelo": "SAMSUNG S23"
//     },
//     {
//         "nome": "CLARISSA FALCÃO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "IPHONE SE"
//     },
//     {
//         "nome": "JADER SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "GALAXY M54"
//     },
//     {
//         "nome": "ROMILDO SALES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354149405394955",
//         "imei2": "",
//         "modelo": "GALAXY NOTE20"
//     },
//     {
//         "nome": "ANTÔNIO CARLOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "866556068224264",
//         "imei2": "",
//         "modelo": "XIAOMI REDMI 12"
//     },
//     {
//         "nome": "MARCO ANTÔNIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356828117775142",
//         "imei2": "",
//         "modelo": "IPHONE XSS"
//     },
//     {
//         "nome": "CARLOS QUEIROZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358754214637480",
//         "imei2": "",
//         "modelo": "IPHONE 13 PRO MAX"
//     },
//     {
//         "nome": "CELIANE ROCHA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866909056781219",
//         "imei2": "",
//         "modelo": "REDMINOTE10 PRO"
//     },
//     {
//         "nome": "JONNY ARAUJO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353171122394804",
//         "imei2": "",
//         "modelo": "GALSXY A14"
//     },
//     {
//         "nome": "ANA LÚCIA NEVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "353171128714146",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "CARLOS ALBERTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359023620537562",
//         "imei2": "",
//         "modelo": "GALAXY A13"
//     },
//     {
//         "nome": "JONNY ARAUJO FILHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353171122149356",
//         "imei2": "",
//         "modelo": "GALAXY A14"
//     },
//     {
//         "nome": "JOSE LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354103135873804",
//         "imei2": "",
//         "modelo": "SANSUNG S 22"
//     },
//     {
//         "nome": "JOÃO NETO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "863364052440068",
//         "imei2": "",
//         "modelo": "POCO F4GT"
//     },
//     {
//         "nome": "ADRIANO FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "359585073874601",
//         "imei2": "",
//         "modelo": "SANSUNG J7"
//     },
//     {
//         "nome": "EDUARDO FRANÇA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359888177548703",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "CELIA QUINTÃO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350456242625101",
//         "imei2": "",
//         "modelo": "SANSUNG S20 FE"
//     },
//     {
//         "nome": "ANA CATARINA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "357799152151797",
//         "imei2": "",
//         "modelo": "SANSUNG A54"
//     },
//     {
//         "nome": "VIVANE CARVALHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "353775370537862",
//         "imei2": "",
//         "modelo": "GALAXY A73"
//     },
//     {
//         "nome": "LOURIANE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "363941303492746",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "CRISTHIANE COSTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359505060355265",
//         "imei2": "",
//         "modelo": "SANSUNG S22 PLUS"
//     },
//     {
//         "nome": "JAILSON",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353065223506938",
//         "imei2": "",
//         "modelo": "SANSUNG M54"
//     },
//     {
//         "nome": "JULIANA LINS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351651526348615",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO MAX"
//     },
//     {
//         "nome": "ALEXANDRE GONÇALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352537703852918",
//         "imei2": "",
//         "modelo": "MOTO G20"
//     },
//     {
//         "nome": "ALEXANDRE GONÇALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354397312971718",
//         "imei2": "",
//         "modelo": "GALAXY A02"
//     },
//     {
//         "nome": "CLAUDIA FERNANDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352887115312351",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "JONATAN",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "863548054187384",
//         "imei2": "",
//         "modelo": "POCO F3"
//     },
//     {
//         "nome": "SANDRA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "863164063628929",
//         "imei2": "",
//         "modelo": "REDMINOTE 13"
//     },
//     {
//         "nome": "DAVID ALMEIDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356909112745031",
//         "imei2": "",
//         "modelo": "MOTO ONE FUSION"
//     },
//     {
//         "nome": "LEONAN VASCONCELOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353995106270089",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "CÁRMEN CHAVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359761365177777",
//         "imei2": "",
//         "modelo": "MOTO G20"
//     },
//     {
//         "nome": "ROSSANA DIAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352177392585980",
//         "imei2": "",
//         "modelo": "GALAXY A 13"
//     },
//     {
//         "nome": "ROSINEIDE DE OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "359986692454157",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "ALINE CAVALCANTI",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357140957638722",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "REBECA PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355109412478992",
//         "imei2": "",
//         "modelo": "MOTO G 32"
//     },
//     {
//         "nome": "ISLAINE SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "862358064284986",
//         "imei2": "",
//         "modelo": "XIAOMI REDIMI NOT11"
//     },
//     {
//         "nome": "EDSON SILVA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "867701067813662",
//         "imei2": "",
//         "modelo": "POCO M5 S"
//     },
//     {
//         "nome": "VALDIRA PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359465381825001",
//         "imei2": "",
//         "modelo": "MOTO G31"
//     },
//     {
//         "nome": "THAIS PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358388751015311",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "MATHEUS ALENCAR",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35649910055507",
//         "imei2": "",
//         "modelo": "SANSUNG A14"
//     },
//     {
//         "nome": "MARIA SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354015084093608",
//         "imei2": "",
//         "modelo": "GALAXY J7 PRIME"
//     },
//     {
//         "nome": "CARLOS SAMPAIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "353917853013827",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "JOSE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355708114466468",
//         "imei2": "",
//         "modelo": "SANSUNG AS1"
//     },
//     {
//         "nome": "BRENDA OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "355908107671823",
//         "imei2": "",
//         "modelo": "SANSUNG A 20"
//     },
//     {
//         "nome": "FABIANE SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "8664248065050684",
//         "imei2": "",
//         "modelo": "XIAOMI NOTE 13"
//     },
//     {
//         "nome": "IGNEZ GUIMRÃES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353960261425043",
//         "imei2": "",
//         "modelo": "SANSUNG GALAXY S20FE"
//     },
//     {
//         "nome": "CARLOS GILBERTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "XIAOMI POCO X5"
//     },
//     {
//         "nome": "ADEJARDO FILHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353568255378977",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "MARIA CASTRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359462819822023",
//         "imei2": "",
//         "modelo": "IPHONE"
//     },
//     {
//         "nome": "GABRIEL SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "865945057217481",
//         "imei2": "",
//         "modelo": "XIAOMI REDMI NOTE"
//     },
//     {
//         "nome": "CARLOS FILHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "865635060653125",
//         "imei2": "",
//         "modelo": "POCO 14"
//     },
//     {
//         "nome": "RITA RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "865643060243301",
//         "imei2": "",
//         "modelo": "REDMI NOTE 11"
//     },
//     {
//         "nome": "JOSE FELIX",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352236854404526",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "MARCELA TAVARES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356646228370235",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "VIRGINIA PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359465387983572",
//         "imei2": "",
//         "modelo": "MOTOG 31"
//     },
//     {
//         "nome": "ALINE BEZERRA",
//         "cidade": "ABREU E LIMA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "352115457639903",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "RAYANE CASTRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353035115652249",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "DANIELA FREITAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358622750949017",
//         "imei2": "",
//         "modelo": "MOTO G"
//     },
//     {
//         "nome": "LYRANJOR FERREIRA",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356417993539564",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "MARCIELLE FERNANDES",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "866331063088001",
//         "imei2": "",
//         "modelo": "REDMI 12"
//     },
//     {
//         "nome": "MARGARIDA BARROS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "353171123803092",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "IVANIL LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355326081235178",
//         "imei2": "",
//         "modelo": "IPHONE 7"
//     },
//     {
//         "nome": "JOHN SOUZA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352682650719601",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "SILAS SILVA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357095181123406",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO MAX"
//     },
//     {
//         "nome": "EDUARDO ALMEIDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "867131054567503",
//         "imei2": "",
//         "modelo": "REDMI NOTE 9"
//     },
//     {
//         "nome": "DIEGO DE OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353443740034181",
//         "imei2": "",
//         "modelo": "GALAXY S22 PLUS"
//     },
//     {
//         "nome": "MARIANA CAVALCANTI",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350456242308831",
//         "imei2": "",
//         "modelo": "GALAXY S20"
//     },
//     {
//         "nome": "ELISÂNGELA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "MESTRADO",
//         "nascimento": "",
//         "imei1": "868636059823882",
//         "imei2": "",
//         "modelo": "11T PRO"
//     },
//     {
//         "nome": "SILVANIA BEZERRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354103135690281",
//         "imei2": "",
//         "modelo": "GALAXY S22"
//     },
//     {
//         "nome": "ANDRÉ FELIPE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "355293210093482",
//         "imei2": "",
//         "modelo": "GALAXY S24"
//     },
//     {
//         "nome": "CARLOS LEITE",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "350433275887650",
//         "imei2": "",
//         "modelo": "MOTO G14"
//     },
//     {
//         "nome": "MONICA SILVA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869703057317215",
//         "imei2": "",
//         "modelo": "REDMI NOTE10"
//     },
//     {
//         "nome": "LAURA LINO",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "357461101240227",
//         "imei2": "",
//         "modelo": "GALAXY A 50"
//     },
//     {
//         "nome": "LUCICLEIDE LINO",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "355473602191116",
//         "imei2": "",
//         "modelo": "GALAXY A 02S"
//     },
//     {
//         "nome": "WASHINGTON LUZ",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354600855487996",
//         "imei2": "",
//         "modelo": "MOTO G32"
//     },
//     {
//         "nome": "MARCIO BATISTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "352790348875956",
//         "imei2": "",
//         "modelo": "MOTO G52"
//     },
//     {
//         "nome": "ENZO DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "357584202692671",
//         "imei2": "",
//         "modelo": "MOTOG 32"
//     },
//     {
//         "nome": "SANDRA MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350024062366360",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "PATRICIA VALERIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "MESTRADO",
//         "nascimento": "",
//         "imei1": "358923236303500",
//         "imei2": "",
//         "modelo": "SANSUNG A52"
//     },
//     {
//         "nome": "RENAN RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352705822894430",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "ROMERO NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "3532694299245",
//         "imei2": "",
//         "modelo": "SANSUNG A32"
//     },
//     {
//         "nome": "AMYSON JHONATA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352884117773425",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "LILIAN SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350274359699227",
//         "imei2": "",
//         "modelo": "GALAXY A22"
//     },
//     {
//         "nome": "LIANA OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359410822554000",
//         "imei2": "",
//         "modelo": "GALAXY A 12"
//     },
//     {
//         "nome": "NAILSON VALÉRIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355165988169472",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "ROMILDO JOSÉ OLIVEIRA RAMOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350653114383641",
//         "imei2": "",
//         "modelo": "INFINIX X6515"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "350528723431710",
//         "imei2": "",
//         "modelo": "SAMSUNG"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "356697218139676",
//         "imei2": "",
//         "modelo": "SAMSUNG"
//     },
//     {
//         "nome": "LEDENILSON RAMOS DE OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354478540742988",
//         "imei2": "",
//         "modelo": "DOOGEE S40 PRO"
//     },
//     {
//         "nome": "KLEBER LUCAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "869582062702409",
//         "imei2": "",
//         "modelo": "POCO M5S"
//     },
//     {
//         "nome": "CARLOS ANTONIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352219222871592",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "PRISCILA DE FÁTIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "335425683246657",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO"
//     },
//     {
//         "nome": "AMANDA FERNANDES",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863706058183268",
//         "imei2": "",
//         "modelo": "REDMI NOTE 11 PRO"
//     },
//     {
//         "nome": "IRANALDO HENRIQUE DOS SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359267354607248",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "LUZINETE CHAVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355713110961462",
//         "imei2": "",
//         "modelo": "SAMSUNG J260MU"
//     },
//     {
//         "nome": "GISELLE MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352674170121236",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "TALLES GALVAO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "355238419316549",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "350310753651511",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "359465381900531",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "IRENILDE CARVALHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354659107226156",
//         "imei2": "",
//         "modelo": "J4 PREMIO"
//     },
//     {
//         "nome": "VALDECIO DE ASSUNÇÃO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356904115067558",
//         "imei2": "",
//         "modelo": "MOTOG 9 PLUS"
//     },
//     {
//         "nome": "ROBERVAL INACIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353685811662098",
//         "imei2": "",
//         "modelo": "MOTOG 84"
//     },
//     {
//         "nome": "TATIANE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353855320282015",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "JOÃO OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356342096437211",
//         "imei2": "",
//         "modelo": "GALAXY J5 PRIME"
//     },
//     {
//         "nome": "JOÃO OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356343096437219",
//         "imei2": "",
//         "modelo": "GALAXY J5 PRIME"
//     },
//     {
//         "nome": "SÔNIA OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "352188101551932",
//         "imei2": "",
//         "modelo": "MOTO ONE"
//     },
//     {
//         "nome": "Waldênia Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354251623530277",
//         "imei2": "",
//         "modelo": "MPTO EDGE 30 NEO"
//     },
//     {
//         "nome": "GLEYDSON COSTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358239543905139",
//         "imei2": "",
//         "modelo": "MOTO E 32"
//     },
//     {
//         "nome": "CINARA CARVALHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353171120291812",
//         "imei2": "",
//         "modelo": "GALAXY A14 5G"
//     },
//     {
//         "nome": "ELÓI JÚNIOR",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358558826721230",
//         "imei2": "",
//         "modelo": "SANSUNG GALAXY S20"
//     },
//     {
//         "nome": "MARIA DOS SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356353928820763",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "WARNA RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359925992344379",
//         "imei2": "",
//         "modelo": "MOTO E7"
//     },
//     {
//         "nome": "ALFREDO GALDEZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355514112173761",
//         "imei2": "",
//         "modelo": "GALAXY A14 5G"
//     },
//     {
//         "nome": "BRUNO OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357459105451287",
//         "imei2": "",
//         "modelo": "GALAXY A 10"
//     },
//     {
//         "nome": "EDUARDO XAVIER",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861497068126669",
//         "imei2": "",
//         "modelo": "REDMI NOTE 12"
//     },
//     {
//         "nome": "ANDERSON SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355350101547008",
//         "imei2": "",
//         "modelo": "GALAXY S10"
//     },
//     {
//         "nome": "THAMILYS LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358958558198229",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "JONES BRASIL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "864539068559709",
//         "imei2": "",
//         "modelo": "REDMI NOTE 12S"
//     },
//     {
//         "nome": "GUILHERME ARRUDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356959777629756",
//         "imei2": "",
//         "modelo": "GALAXY A 03S"
//     },
//     {
//         "nome": "CLEYBSON CRUZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "861937057852767",
//         "imei2": "",
//         "modelo": "POCO M3"
//     },
//     {
//         "nome": "FÁBIO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357138167943650",
//         "imei2": "",
//         "modelo": "MOTO G51"
//     },
//     {
//         "nome": "CLEIDE SANTOS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351695960403618",
//         "imei2": "",
//         "modelo": "GALAXY M13"
//     },
//     {
//         "nome": "PAULO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354291424455414",
//         "imei2": "",
//         "modelo": "GALAXY A12"
//     },
//     {
//         "nome": "LUIZ FILHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "35303755640312",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "MAVISON LUCENA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "353665920723957",
//         "imei2": "",
//         "modelo": "GALAXY A12"
//     },
//     {
//         "nome": "SILVANA ARAUJO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357847400247121",
//         "imei2": "",
//         "modelo": "GALAXY S22"
//     },
//     {
//         "nome": "ANA CLAUDIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "867636073495247",
//         "imei2": "",
//         "modelo": "XIAOMI HONOR RMONX3"
//     },
//     {
//         "nome": "FABIO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352500457635590",
//         "imei2": "",
//         "modelo": "MOTOROLA E22"
//     },
//     {
//         "nome": "ANN OLIVEIRA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "867837063604224",
//         "imei2": "",
//         "modelo": "XIAOMI POCOX6"
//     },
//     {
//         "nome": "FRANCICLEIDE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "358287625369377",
//         "imei2": "",
//         "modelo": "SANSUNG A 05"
//     },
//     {
//         "nome": "MARINALDO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356150114942918",
//         "imei2": "",
//         "modelo": "SANSUNG A 31"
//     },
//     {
//         "nome": "IVISON BARBOSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "350302399941141",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "MRINEIDE COSTA",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "EVANDRO FARIAS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356697218935081",
//         "imei2": "",
//         "modelo": "GALAXY A21"
//     },
//     {
//         "nome": "VIVIANE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "868211068739386",
//         "imei2": "",
//         "modelo": "XAOMI NOTE 12"
//     },
//     {
//         "nome": "ISIS ANDRADE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352967350047704",
//         "imei2": "",
//         "modelo": "GALAXY A13"
//     },
//     {
//         "nome": "SUZANA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354476114371408",
//         "imei2": "",
//         "modelo": "GALAXY A30s"
//     },
//     {
//         "nome": "TATIANE DE PONTES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "357138161093676",
//         "imei2": "",
//         "modelo": "MOTO G 52"
//     },
//     {
//         "nome": "ISABELLY VAZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354834092389869",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "ROSEMERE DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "867035054501307",
//         "imei2": "",
//         "modelo": "XIAOMI POCO X4 PRO 5G"
//     },
//     {
//         "nome": "HERQUINIO DE LIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351719111536918",
//         "imei2": "",
//         "modelo": "GALAXY A20"
//     },
//     {
//         "nome": "HERQUINIO DE LIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352283231880093",
//         "imei2": "",
//         "modelo": "GALAXY A23"
//     },
//     {
//         "nome": "JOAQUIM SILVA",
//         "cidade": "GRAVATÁ",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "356174431662793",
//         "imei2": "",
//         "modelo": "DOOGEE S 96 PRÓ"
//     },
//     {
//         "nome": "EDVALDO MIGUEL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356544395964684",
//         "imei2": "",
//         "modelo": "SANSUNG A54"
//     },
//     {
//         "nome": "CAMILA CRISTINA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353600812085132",
//         "imei2": "",
//         "modelo": "GALAXY A13"
//     },
//     {
//         "nome": "GILVAN NERY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356914111221372",
//         "imei2": "",
//         "modelo": "MOTOROLA ONE FUSION"
//     },
//     {
//         "nome": "MARINEIDE COSTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352967353522455",
//         "imei2": "",
//         "modelo": "SANSUNG A14"
//     },
//     {
//         "nome": "DIONE LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869173065679214",
//         "imei2": "",
//         "modelo": "XIAMI"
//     },
//     {
//         "nome": "SAANE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351406757262609",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "ZELIA NEVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356818099670528",
//         "imei2": "",
//         "modelo": "GALAXY A9"
//     },
//     {
//         "nome": "ALUISIO SOUZA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "359761361231271",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "WILSON PRADO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354998773963159",
//         "imei2": "",
//         "modelo": "MOTO G 52"
//     },
//     {
//         "nome": "VICENTE CASTRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354562654107672",
//         "imei2": "",
//         "modelo": "SANSUNG A 32"
//     },
//     {
//         "nome": "ANA PAULA VILAÇA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "MESTRADO",
//         "nascimento": "",
//         "imei1": "351415639704720",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "DARICE DE SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354562656320679",
//         "imei2": "",
//         "modelo": "SANSUNG A 32"
//     },
//     {
//         "nome": "RUTE TRAJANO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "354476111058578",
//         "imei2": "",
//         "modelo": "SANSUNG A 30"
//     },
//     {
//         "nome": "ANA PAULA BARBOSA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351102690740567",
//         "imei2": "",
//         "modelo": "MULT LASER G MAX 2"
//     },
//     {
//         "nome": "MARIA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358287624054319",
//         "imei2": "",
//         "modelo": "SANSUNG A 055"
//     },
//     {
//         "nome": "MARISTELA BOURBON",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353042532313892",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "JULIANA ASSUNSÃO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356181100818598",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "NADJA CHAGAS",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352283230097053",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "STEPHANIA SILVA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356708090677152",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "TATIANA LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359139863110352",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "RAQUEL GOMES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359040080503439",
//         "imei2": "",
//         "modelo": "SANSUNG 69 50 F"
//     },
//     {
//         "nome": "BABARA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357463523019932",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "AZENATH PAULA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "MESTRADO",
//         "nascimento": "",
//         "imei1": "356456106485828",
//         "imei2": "",
//         "modelo": "IPHONE 10"
//     },
//     {
//         "nome": "ANA CHAVES",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358795104630788",
//         "imei2": "",
//         "modelo": "GALAXY A10"
//     },
//     {
//         "nome": "FABIANA SILVA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356707185132750",
//         "imei2": "",
//         "modelo": "GALAXY A12"
//     },
//     {
//         "nome": "GIVALDO FLORÊNCIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356130116612917",
//         "imei2": "",
//         "modelo": "GALAXY A10"
//     },
//     {
//         "nome": "Patricia Siqueira",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352513428494864",
//         "imei2": "",
//         "modelo": "iphone 12"
//     },
//     {
//         "nome": "Edilene Tvatres",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "350312163043404",
//         "imei2": "",
//         "modelo": "motog23"
//     },
//     {
//         "nome": "Albemir cruz",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353765373392142",
//         "imei2": "",
//         "modelo": "galaxy a 12"
//     },
//     {
//         "nome": "Erik Gabriel",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359986691011073",
//         "imei2": "",
//         "modelo": "motog 22"
//     },
//     {
//         "nome": "Roberto de oliveira",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350596816947231",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "tatiana costa",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "VIVIANE PEDROSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358958552903020",
//         "imei2": "",
//         "modelo": "GALAXY A14"
//     },
//     {
//         "nome": "SINTHIA SANTOS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353171128083807",
//         "imei2": "",
//         "modelo": "GALAXY A145G"
//     },
//     {
//         "nome": "WENDEL SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352737598142967",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "MARIVALDA ANDRADE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "352234679625896",
//         "imei2": "",
//         "modelo": "MOTO G9 PLAY"
//     },
//     {
//         "nome": "ALINE SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356355994278719",
//         "imei2": "",
//         "modelo": "MOTO E40"
//     },
//     {
//         "nome": "ANA SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351328052075173",
//         "imei2": "",
//         "modelo": "MOTOG82 5G"
//     },
//     {
//         "nome": "LILIAM FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351759112124587",
//         "imei2": "",
//         "modelo": "GALAXY A30 S"
//     },
//     {
//         "nome": "JOSÉ MINERVINO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "869172058654903",
//         "imei2": "",
//         "modelo": "POCOF3"
//     },
//     {
//         "nome": "SILVIO ALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "358299382962831",
//         "imei2": "",
//         "modelo": "GALAXY A02"
//     },
//     {
//         "nome": "MARCELINO CARDOSO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354188150197320",
//         "imei2": "",
//         "modelo": "GALAXY A40E"
//     },
//     {
//         "nome": "TATIANA COSTA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "358946833250717",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "DAVID LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358958555288445",
//         "imei2": "",
//         "modelo": "MOTOROLA A14"
//     },
//     {
//         "nome": "AUDINEIA MELO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350915067913835",
//         "imei2": "",
//         "modelo": "SANSUNG 5M"
//     },
//     {
//         "nome": "LAUDINEIDE FREITAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350739401834295",
//         "imei2": "",
//         "modelo": "MOTOROLA E13"
//     },
//     {
//         "nome": "JOCILEIDE SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "351683331720712",
//         "imei2": "",
//         "modelo": "MOTOROLA E13"
//     },
//     {
//         "nome": "MARLENE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "355496107151699",
//         "imei2": "",
//         "modelo": "LG K12 PRIME"
//     },
//     {
//         "nome": "HAILTON MORAIS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350312165091559",
//         "imei2": "",
//         "modelo": "MOTO G23"
//     },
//     {
//         "nome": "LUCIANO JOSÉ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "352500456215717",
//         "imei2": "",
//         "modelo": "MOTO E22"
//     },
//     {
//         "nome": "MARIA AUXILIADORA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357567913458839",
//         "imei2": "",
//         "modelo": "GALAXY A25"
//     },
//     {
//         "nome": "LEANDRO RODRIGUES",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "35368581",
//         "imei2": "",
//         "modelo": "MOTO G84"
//     },
//     {
//         "nome": "RENATA ROCHA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350104646310505",
//         "imei2": "",
//         "modelo": "GALAXY A14"
//     },
//     {
//         "nome": "ENILSON CRUZ",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355560117762496",
//         "imei2": "",
//         "modelo": "MOTO G9 PLAY"
//     },
//     {
//         "nome": "ENILSON CRUZ",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351683335714273",
//         "imei2": "",
//         "modelo": "MOTO E13"
//     },
//     {
//         "nome": "SOLANGE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "357651710455857",
//         "imei2": "",
//         "modelo": "GALAXY A 13"
//     },
//     {
//         "nome": "FABIOLA CAR",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "868725065677927",
//         "imei2": "",
//         "modelo": "XIAOMI 12 PRO"
//     },
//     {
//         "nome": "DURVAL ACIOLE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353619113063473",
//         "imei2": "",
//         "modelo": "MOTOROLOA ONE"
//     },
//     {
//         "nome": "MARIA DE LOURDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354397313436091",
//         "imei2": "",
//         "modelo": "GALAXY AOZ"
//     },
//     {
//         "nome": "RAFAELA CUBHA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354600858521957",
//         "imei2": "",
//         "modelo": "MOTO G 32"
//     },
//     {
//         "nome": "LORRENA FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350528721186779",
//         "imei2": "",
//         "modelo": "SANSUNG A14"
//     },
//     {
//         "nome": "SHEILA VANELLI",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "353171124779937",
//         "imei2": "",
//         "modelo": "SANSUNG A14"
//     },
//     {
//         "nome": "JOÃO PAULO ARAÚJO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353265118934282",
//         "imei2": "",
//         "modelo": "LG K51S"
//     },
//     {
//         "nome": "CAIO AMARAL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350636590547615",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRÓ MAX"
//     },
//     {
//         "nome": "THALITA NERY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "DOUTORADO",
//         "nascimento": "",
//         "imei1": "353046282565361",
//         "imei2": "",
//         "modelo": "SANSUNG A22"
//     },
//     {
//         "nome": "ALEXANDRE CARLOZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356959776432350",
//         "imei2": "",
//         "modelo": "SANSUNG A03S"
//     },
//     {
//         "nome": "SIMONE SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359296847221059",
//         "imei2": "",
//         "modelo": "MOTO E 22"
//     },
//     {
//         "nome": "EUCLIDES SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869006068519724",
//         "imei2": "",
//         "modelo": "XIAMI POCO X5"
//     },
//     {
//         "nome": "BRUNA NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358322261701979",
//         "imei2": "",
//         "modelo": "LG K61"
//     },
//     {
//         "nome": "7JOSÉ GUILHERME LIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "RINALDO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "864300068163665",
//         "imei2": "",
//         "modelo": "XIAOME REDMI 12C"
//     },
//     {
//         "nome": "VAGNER SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "352326292368438",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "MARIA DE LOURDES SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "-",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "CLÉCIO RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354103130904802",
//         "imei2": "",
//         "modelo": "GALAXY S22"
//     },
//     {
//         "nome": "RAFAEL SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352790345769772",
//         "imei2": "",
//         "modelo": "MOTO G53"
//     },
//     {
//         "nome": "MARCELO LUIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357584205936810",
//         "imei2": "",
//         "modelo": "MOTO G23"
//     },
//     {
//         "nome": "CLÁUDIO FEITOSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351951550592421",
//         "imei2": "",
//         "modelo": "C12"
//     },
//     {
//         "nome": "SEVERINO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "869703053510862",
//         "imei2": "",
//         "modelo": "REDMINOTE 10"
//     },
//     {
//         "nome": "NATHÁLIA FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357359099555020",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "SÁVIO FIGUEIREDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "355612584702834",
//         "imei2": "",
//         "modelo": "MOTO G 54 5G"
//     },
//     {
//         "nome": "VITÓRIA CAVALCANTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358958554192705",
//         "imei2": "",
//         "modelo": "GALAXY A14"
//     },
//     {
//         "nome": "LUIZ SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "864066055930974",
//         "imei2": "",
//         "modelo": "REDMI NOTE 9C"
//     },
//     {
//         "nome": "YASMIN CARLA FRANCELINO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350264528231481",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "DANIEL CARLOS S TORRES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352967353406964",
//         "imei2": "",
//         "modelo": "GALAXY A13"
//     },
//     {
//         "nome": "KARLA ALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358443609912068",
//         "imei2": "",
//         "modelo": "GALAXY A34"
//     },
//     {
//         "nome": "MAYARA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "867675051216555",
//         "imei2": "",
//         "modelo": "REALMI C11"
//     },
//     {
//         "nome": "MARCIA SANTOS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "3556612589295990",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "LENIRA CAMELO DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352432982771825",
//         "imei2": "",
//         "modelo": "GALAXY A11"
//     },
//     {
//         "nome": "ELISANGELA WANDERDEY",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353428897117285",
//         "imei2": "",
//         "modelo": "SAMSUNG M12"
//     },
//     {
//         "nome": "MARCOS AURELIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "358615317083049",
//         "imei2": "",
//         "modelo": "GALAXY S23"
//     },
//     {
//         "nome": "GILLIAM LIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353687150162128",
//         "imei2": "",
//         "modelo": "INFINIT NOT20"
//     },
//     {
//         "nome": "EDILENE DUARTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354957734940060",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO"
//     },
//     {
//         "nome": "MARIA DA CONCEIÇÃO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "867355066837469",
//         "imei2": "",
//         "modelo": "GALAXY A11"
//     },
//     {
//         "nome": "ELIEL JOSE",
//         "cidade": "RIBEIRÃO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354091573466704",
//         "imei2": "",
//         "modelo": "SAMSUNG M54"
//     },
//     {
//         "nome": "HERMANO FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350039934230966",
//         "imei2": "",
//         "modelo": "GALAXY A12"
//     },
//     {
//         "nome": "ANDREZA ALEXADRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358110363158085",
//         "imei2": "",
//         "modelo": "GALAXY A 23"
//     },
//     {
//         "nome": "ANA BEATRIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "855153062338760",
//         "imei2": "",
//         "modelo": "NOT12 S"
//     },
//     {
//         "nome": "CESAR CARNEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354476115101820",
//         "imei2": "",
//         "modelo": "SAMSUNG A30S"
//     },
//     {
//         "nome": "AGUINALDO JOSÉ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354494161203689",
//         "imei2": "",
//         "modelo": "SAMSUNG A14"
//     },
//     {
//         "nome": "DENNYS RYAN",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358845271036291",
//         "imei2": "",
//         "modelo": "LG K51S"
//     },
//     {
//         "nome": "JUCILEIA MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351328052704814",
//         "imei2": "",
//         "modelo": "MOTO G 88"
//     },
//     {
//         "nome": "DJAILSON RIBEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350739407974475",
//         "imei2": "",
//         "modelo": "MOTO E 13"
//     },
//     {
//         "nome": "SAMUEL SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "POCOX5"
//     },
//     {
//         "nome": "RICARDO ROSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355015105805211",
//         "imei2": "",
//         "modelo": "S10"
//     },
//     {
//         "nome": "ANA PAULA SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350226904636690",
//         "imei2": "",
//         "modelo": "MOTO E 20"
//     },
//     {
//         "nome": "BARBARA NATASHA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359802484491614",
//         "imei2": "",
//         "modelo": "MOTOG 60S"
//     },
//     {
//         "nome": "MAYARA DAYANE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356041406801773",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO MAX"
//     },
//     {
//         "nome": "JAIR SOUZA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356450527828054",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "FABIO FRAZAO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353247103450896",
//         "imei2": "",
//         "modelo": "IPHONE 11 PRO"
//     },
//     {
//         "nome": "SUZANA MARIA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL INCOMPLETO",
//         "nascimento": "",
//         "imei1": "354600853695434",
//         "imei2": "",
//         "modelo": "MOTO G 32"
//     },
//     {
//         "nome": "HELENA PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353171121971958",
//         "imei2": "",
//         "modelo": "GALAXY A14"
//     },
//     {
//         "nome": "GICELIA SILVANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353269422320360",
//         "imei2": "",
//         "modelo": "GALAXY A32"
//     },
//     {
//         "nome": "ELIZABETH MARIA",
//         "cidade": "PETROLÂNDIA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL INCOMPLETO",
//         "nascimento": "",
//         "imei1": "863853041173012",
//         "imei2": "",
//         "modelo": "REDMI 8T"
//     },
//     {
//         "nome": "JOSE PEDRO FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL INCOMPLETO",
//         "nascimento": "",
//         "imei1": "358467733209216",
//         "imei2": "",
//         "modelo": "GALAXY A14"
//     },
//     {
//         "nome": "JULIANA CABRAL",
//         "cidade": "SÃO PAULO",
//         "estado": "SP",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350603386160607",
//         "imei2": "",
//         "modelo": "GALAXY A54"
//     },
//     {
//         "nome": "ANAILZA MANSO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351989278104517",
//         "imei2": "",
//         "modelo": "A03"
//     },
//     {
//         "nome": "MABEL CASTRO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356959775698852",
//         "imei2": "",
//         "modelo": "GALAXY A 035"
//     },
//     {
//         "nome": "FERNANDO FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "864539069636183",
//         "imei2": "",
//         "modelo": "REDMI NOT 12"
//     },
//     {
//         "nome": "JOSÉ ANTONIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "350596813454496",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "CAMILA SILVA CAMPOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355772533080771",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "DAIANA KUIARELI",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "868527071868080",
//         "imei2": "",
//         "modelo": "REDMI NOT13"
//     },
//     {
//         "nome": "ERIKA CRISTINA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359556481783254",
//         "imei2": "",
//         "modelo": "MOTO G 84"
//     },
//     {
//         "nome": "TATIANA CARLA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352537700966752",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "WELMERSON SUELVE",
//         "cidade": "ESCADA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354634441023322",
//         "imei2": "",
//         "modelo": "IPHONE 15 PRO MAX"
//     },
//     {
//         "nome": "LAURO SANTOS",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351883083022750",
//         "imei2": "",
//         "modelo": "MOTO G 52"
//     },
//     {
//         "nome": "ANTONIA CHEILA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "862938068369808",
//         "imei2": "",
//         "modelo": "XIAOMI NOT12"
//     },
//     {
//         "nome": "RODRIGO AUGUSTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "895505329901083",
//         "imei2": "",
//         "modelo": "XIAOMI NOT12"
//     },
//     {
//         "nome": "TANIA GLORIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "350039937518359",
//         "imei2": "",
//         "modelo": "GALAXY A12"
//     },
//     {
//         "nome": "GERALDO FERNANDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358958550875527",
//         "imei2": "",
//         "modelo": "SANSUNG A04"
//     },
//     {
//         "nome": "FABIO RICARDO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "861440068833645",
//         "imei2": "",
//         "modelo": "REDMI"
//     },
//     {
//         "nome": "CLAUDIA DAVI",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354539510661480",
//         "imei2": "",
//         "modelo": "SANSUNG A03"
//     },
//     {
//         "nome": "ANA CARLA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "865733048814487",
//         "imei2": "",
//         "modelo": "SANSUNG A14"
//     },
//     {
//         "nome": "IVONE MARIA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "358287626598222",
//         "imei2": "",
//         "modelo": "SANSUNG A05"
//     },
//     {
//         "nome": "ALINE MARQUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353265117527376",
//         "imei2": "",
//         "modelo": "LG KS15"
//     },
//     {
//         "nome": "MICHELE CINTIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350603382643085",
//         "imei2": "",
//         "modelo": "A53"
//     },
//     {
//         "nome": "JOSE MIGUEL",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350916877223902",
//         "imei2": "",
//         "modelo": "A10"
//     },
//     {
//         "nome": "FABIO VITORINO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354562638737490",
//         "imei2": "",
//         "modelo": "A32"
//     },
//     {
//         "nome": "ELAINE MORAIS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "862938609447943",
//         "imei2": "",
//         "modelo": "REDMI 12"
//     },
//     {
//         "nome": "ANA LETICIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353068109896282",
//         "imei2": "",
//         "modelo": "JPHXR"
//     },
//     {
//         "nome": "FABIO VITORINO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354879434196107",
//         "imei2": "",
//         "modelo": "IPHONE 15 MAX PRO"
//     },
//     {
//         "nome": "ELIZABETE ALVES",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO G 14"
//     },
//     {
//         "nome": "SEVERINO ACIOLI",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353171129129120",
//         "imei2": "",
//         "modelo": "SANSUNG A14"
//     },
//     {
//         "nome": "NELSON OLIVEIRA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355497362336215",
//         "imei2": "",
//         "modelo": "MOTO G05"
//     },
//     {
//         "nome": "ERIBERTO MANOEL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "357651716521395",
//         "imei2": "",
//         "modelo": "MOTO G A13"
//     },
//     {
//         "nome": "JOSILENE MARIA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "35829938",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "JOSINALDO SILVA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357567915247081",
//         "imei2": "",
//         "modelo": "GALAXY A 25 5G"
//     },
//     {
//         "nome": "IZAÍAS SANTOS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861497061957102",
//         "imei2": "",
//         "modelo": "REDMINOTE 12"
//     },
//     {
//         "nome": "SILVIO DE ARAUJO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "359102105508619",
//         "imei2": "",
//         "modelo": "MOTO E6 PLUS"
//     },
//     {
//         "nome": "EDSON SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354628248083073",
//         "imei2": "",
//         "modelo": "GALAXY S 10"
//     },
//     {
//         "nome": "JEAN SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL INCOMPLETO",
//         "nascimento": "",
//         "imei1": "869995061863735",
//         "imei2": "",
//         "modelo": "REMALME C 35"
//     },
//     {
//         "nome": "LUIZ SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354600852067676",
//         "imei2": "",
//         "modelo": "MOTO G 32"
//     },
//     {
//         "nome": "DANIELE CARLA",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355017381868608",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "REGENILDO BARBOSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352429897371253",
//         "imei2": "",
//         "modelo": "SANSUNG A33"
//     },
//     {
//         "nome": "MARCELO GALVAO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "841408060380501",
//         "imei2": "",
//         "modelo": "POCO 05"
//     },
//     {
//         "nome": "MARIA LUCIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356969670874672",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "MARIA ANDREIA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351932264151910",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "JORGE ANDERSON",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "869995061295854",
//         "imei2": "",
//         "modelo": "REALMI C35"
//     },
//     {
//         "nome": "PAULO JOSE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359598831492616",
//         "imei2": "",
//         "modelo": "MOTO G 24"
//     },
//     {
//         "nome": "RAFAEL DOS SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863707066737566",
//         "imei2": "",
//         "modelo": "REDMI NOT12 S"
//     },
//     {
//         "nome": "JOELMA MARCELINO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "864248060435583",
//         "imei2": "",
//         "modelo": "REDMI NOT13"
//     },
//     {
//         "nome": "ANDREZZA KEZZE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355773112425379",
//         "imei2": "",
//         "modelo": "GALAXY A51"
//     },
//     {
//         "nome": "ELAINE MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353614882343274",
//         "imei2": "",
//         "modelo": "MOTO G04"
//     },
//     {
//         "nome": "EULÁLIA NATALY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "869396041827918",
//         "imei2": "",
//         "modelo": "REDMINOTE 7"
//     },
//     {
//         "nome": "MARCIA PERCÍLIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350102950208611",
//         "imei2": "",
//         "modelo": "GALAXY A32"
//     },
//     {
//         "nome": "MIDIAN CARLOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357724078003955",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "CLEIBSON RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353065223264298",
//         "imei2": "",
//         "modelo": "M 54"
//     },
//     {
//         "nome": "LUIZ GUEDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "865635067385986",
//         "imei2": "",
//         "modelo": "REDMI 12S"
//     },
//     {
//         "nome": "RITA DE CÁSSIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "865635069446026",
//         "imei2": "",
//         "modelo": "REDMI 12"
//     },
//     {
//         "nome": "CARLOS RIBEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "GALAXY A 53"
//     },
//     {
//         "nome": "ANA CAVALCANTI",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356924111427374",
//         "imei2": "",
//         "modelo": "MOTO G 56 PLUS"
//     },
//     {
//         "nome": "CRISTIANE DUARTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353171129840536",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "KELLY DUARTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "861052072080467",
//         "imei2": "",
//         "modelo": "REDMI 13"
//     },
//     {
//         "nome": "PAULO ANJOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351932262177156",
//         "imei2": "",
//         "modelo": "MOTO G53 5G"
//     },
//     {
//         "nome": "LUCIA MARIA MELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358664881393517",
//         "imei2": "",
//         "modelo": "MOTO G 62"
//     },
//     {
//         "nome": "VANESSA SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "357347098023850",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "CANDIDA BARBOSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353291454940089",
//         "imei2": "",
//         "modelo": "SANSUNG A04 E"
//     },
//     {
//         "nome": "LUCAS CUNHA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "354702111489707",
//         "imei2": "",
//         "modelo": "SANSUNG A71"
//     },
//     {
//         "nome": "FERNANDA NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352467929099757",
//         "imei2": "",
//         "modelo": "SANSUNG A 15"
//     },
//     {
//         "nome": "REGINALDO DA SILVA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "860240058914236",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "ELIALDO SEBASTIÃO DA SILVA",
//         "cidade": "ARAÇOIABA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353037554983937",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "EDISON RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357584205429634",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "ANA MARIA PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354103131058004",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "SILVIA RENATA COSTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359167813445057",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "WELLIGTON GOMES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356544391837256",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "JUDITE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350513710860584",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "REGINALDO DA SILVA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "860240058914236",
//         "imei2": "",
//         "modelo": "REDIMI NOT 9"
//     },
//     {
//         "nome": "FRANCISCO SATURNINO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352790344062591",
//         "imei2": "",
//         "modelo": "MOTO 65356"
//     },
//     {
//         "nome": "ADILSON BEZERRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358287626591490",
//         "imei2": "",
//         "modelo": "SANSUNG A05"
//     },
//     {
//         "nome": "REJANE XAVIER",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353037552085198",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "HUGO SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "868689060137842",
//         "imei2": "",
//         "modelo": "CUBOT P80"
//     },
//     {
//         "nome": "ALOISIO ALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354600850513890",
//         "imei2": "",
//         "modelo": "MOTO G 52"
//     },
//     {
//         "nome": "MANLU FERNADES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356914111977296",
//         "imei2": "",
//         "modelo": "ONE RUSION"
//     },
//     {
//         "nome": "EUDES ANDRADE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "868671059396829",
//         "imei2": "",
//         "modelo": "XIAOMI3 PRO"
//     },
//     {
//         "nome": "IRECÊ OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359410828306447",
//         "imei2": "",
//         "modelo": "SANSUNG A12"
//     },
//     {
//         "nome": "ANDRÉ COSTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "350433274183333",
//         "imei2": "",
//         "modelo": "MOTO G 14"
//     },
//     {
//         "nome": "JACIARA SANTOS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359167811235294",
//         "imei2": "",
//         "modelo": "MOTO G 34"
//     },
//     {
//         "nome": "SONIA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "358140830306181",
//         "imei2": "",
//         "modelo": "GALAXY A 55"
//     },
//     {
//         "nome": "SERGIO LEITE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350409872137186",
//         "imei2": "",
//         "modelo": "GALAXY A 04"
//     },
//     {
//         "nome": "RAYANNE SOUZA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350308220549813",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "ROSIANE SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358439961264874",
//         "imei2": "",
//         "modelo": "MOTO E 20"
//     },
//     {
//         "nome": "PAULO JOSE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350433275152238",
//         "imei2": "",
//         "modelo": "MOTO G 14"
//     },
//     {
//         "nome": "NELY FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357309380223770",
//         "imei2": "",
//         "modelo": "ZFLIP 5"
//     },
//     {
//         "nome": "EDINALDO SANTANA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358581626038738",
//         "imei2": "",
//         "modelo": "MOTO G9 PLAY"
//     },
//     {
//         "nome": "WILLYANE LINS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352195102039932",
//         "imei2": "",
//         "modelo": "MOTO G 7"
//     },
//     {
//         "nome": "HELTON SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "861915041483139",
//         "imei2": "",
//         "modelo": "XIAOMI NOTE 8"
//     },
//     {
//         "nome": "NIANE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352676521434747",
//         "imei2": "",
//         "modelo": "IPHONE 15 PROMAX"
//     },
//     {
//         "nome": "JOSÉ RAFAEL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350175610553659",
//         "imei2": "",
//         "modelo": "SANSUNG S23 ULTRA"
//     },
//     {
//         "nome": "SERGIO RICARDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353386386382459",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "CARLOS HENRIQUE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "869374067480300",
//         "imei2": "",
//         "modelo": "POCO M4 PRO"
//     },
//     {
//         "nome": "IDELMARISE BOMFIM",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351102692178667",
//         "imei2": "",
//         "modelo": "MULTLASER"
//     },
//     {
//         "nome": "ANA MARIA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357651710896621",
//         "imei2": "",
//         "modelo": "SANSUNG GALAXY A13"
//     },
//     {
//         "nome": "EDSON JOSÉ",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350048270245231",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "JULIANA MUNIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353818085200265",
//         "imei2": "",
//         "modelo": "IPHONE 7 PLUS"
//     },
//     {
//         "nome": "ANDRE LUIZ COSTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356742455588589",
//         "imei2": "",
//         "modelo": "MOTO G 30"
//     },
//     {
//         "nome": "MARCOS LUIZ ARAUJO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354624108453431",
//         "imei2": "",
//         "modelo": "GALAXY S10"
//     },
//     {
//         "nome": "LEANDRO SOARES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350828560982712",
//         "imei2": "",
//         "modelo": "S23 ULTRA"
//     },
//     {
//         "nome": "MARCIO ADRIANO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356181100277548",
//         "imei2": "",
//         "modelo": "GALAXY M30"
//     },
//     {
//         "nome": "THAYS VITORIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357415872468177",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "WILLAMS MARCELINO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "868211061993626",
//         "imei2": "",
//         "modelo": "REDMI 12"
//     },
//     {
//         "nome": "IARA SILVESTRE DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "359296842527799",
//         "imei2": "",
//         "modelo": "MOTO E 22"
//     },
//     {
//         "nome": "ROSANGELA CAVALCANTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356694086727948",
//         "imei2": "",
//         "modelo": "IPHONE 7 PLUS"
//     },
//     {
//         "nome": "JOANA SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357980441516277",
//         "imei2": "",
//         "modelo": "SANSUNG A 15"
//     },
//     {
//         "nome": "SILVIANY FLAVIA NUNES",
//         "cidade": "IGARASSU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354965544043306",
//         "imei2": "",
//         "modelo": "SANSUNG S21 FE"
//     },
//     {
//         "nome": "RICHARD GUILHERME",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863565070695406",
//         "imei2": "",
//         "modelo": "REDMI 12"
//     },
//     {
//         "nome": "EDILSOM SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351719113915656",
//         "imei2": "",
//         "modelo": "SANSUNG J5"
//     },
//     {
//         "nome": "ELIAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "EDRIANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "350596816161031",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "SILVA MARIA FARIAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356742455844412",
//         "imei2": "",
//         "modelo": "MOTO G 30"
//     },
//     {
//         "nome": "JOSE LENILDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358443609359781",
//         "imei2": "",
//         "modelo": "SANSUNG"
//     },
//     {
//         "nome": "LEANDRO S RIBEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350916876569461",
//         "imei2": "",
//         "modelo": "GALAXY A03"
//     },
//     {
//         "nome": "EVELYN CAMPELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353386384446015",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "ELIAS SOUZA FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354154107713056",
//         "imei2": "",
//         "modelo": "ONE VISION"
//     },
//     {
//         "nome": "MÁRCIA ALCÂNTARA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350915068342216",
//         "imei2": "",
//         "modelo": "GALAXY A04S"
//     },
//     {
//         "nome": "JOSEANE MARIA DE INOJOSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "352326298786826",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "ENILDO LEITE DE FREITAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "NÃO INFORMADO",
//         "imei2": "",
//         "modelo": "A50"
//     },
//     {
//         "nome": "JURANDI BARROS DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351102691541085",
//         "imei2": "",
//         "modelo": "GMAX2"
//     },
//     {
//         "nome": "GILBERTO XAVIER",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355514110877355",
//         "imei2": "",
//         "modelo": "GAXAXY A 11"
//     },
//     {
//         "nome": "HARLYSON R SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355037994653239",
//         "imei2": "",
//         "modelo": "MOTO E7"
//     },
//     {
//         "nome": "ELIDA ROBERTA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353448665753491",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "MARCOS JOSE RANGEL",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "869551050117730",
//         "imei2": "",
//         "modelo": "REALMI RMX3491"
//     },
//     {
//         "nome": "ELAINE CRISTINA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "862418059247289",
//         "imei2": "",
//         "modelo": "REDMI 6"
//     },
//     {
//         "nome": "JOSE JAILSON",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352432981548455",
//         "imei2": "",
//         "modelo": "GALAXY A 11"
//     },
//     {
//         "nome": "JOSÉ VIANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350844812611405",
//         "imei2": "",
//         "modelo": "GALAXY A02"
//     },
//     {
//         "nome": "VIVIANE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "869433062879963",
//         "imei2": "",
//         "modelo": "REDMINOTE"
//     },
//     {
//         "nome": "CAMILA SOBRAL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352826832741112",
//         "imei2": "",
//         "modelo": "GALAXY M 53"
//     },
//     {
//         "nome": "DANILO FERNANDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "IPHONE 11 PRO MAX"
//     },
//     {
//         "nome": "FILIPE LEMOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351583483166674",
//         "imei2": "",
//         "modelo": "GALAXY A23"
//     },
//     {
//         "nome": "SOUTO MAIOR",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354836610685017",
//         "imei2": "",
//         "modelo": "GALAXY S 22 ULTRA"
//     },
//     {
//         "nome": "CARLTON SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "353665908230629",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO MAX"
//     },
//     {
//         "nome": "EDELAINE BRITTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353885666432478",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO MAX"
//     },
//     {
//         "nome": "CAROLINNE SANTA ROSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL INCOMPLETO",
//         "nascimento": "",
//         "imei1": "352485855171515",
//         "imei2": "",
//         "modelo": "IPHONE 14 PLUS"
//     },
//     {
//         "nome": "CLAUDEMIR FRANÇA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "357567917012384",
//         "imei2": "",
//         "modelo": "GALAXY A 25"
//     },
//     {
//         "nome": "ADRIANA SOARES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359097104998938",
//         "imei2": "",
//         "modelo": "MOTO G 8 POWER"
//     },
//     {
//         "nome": "VERÔNICA ABREU",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "864460052791002",
//         "imei2": "",
//         "modelo": "XIOMI X 3 PRO"
//     },
//     {
//         "nome": "ALDEMAR RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869374007398768",
//         "imei2": "",
//         "modelo": "POCCO M4 PRO"
//     },
//     {
//         "nome": "Luiz Claudio dos Santos Vidal",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357221101751254\\/16",
//         "imei2": "",
//         "modelo": "Motorola One"
//     },
//     {
//         "nome": "Paulo Ricardo F. Leandro",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356130860229413\\/01",
//         "imei2": "",
//         "modelo": "ASS"
//     },
//     {
//         "nome": "Cassia de Souza Silva Maciel",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351884700702212",
//         "imei2": "",
//         "modelo": "iphone 13"
//     },
//     {
//         "nome": "Selma Maria da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863164067001503\\/00",
//         "imei2": "",
//         "modelo": "Redimi"
//     },
//     {
//         "nome": "Maria de Fátima Queiroga",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355907442636451\\/36",
//         "imei2": "",
//         "modelo": "Motorola Edg 30"
//     },
//     {
//         "nome": "Maryanne Siqueira",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351722110499674\\/01",
//         "imei2": "",
//         "modelo": "A54"
//     },
//     {
//         "nome": "Jonas Wilson Tomaz da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "355100981899775\\/01",
//         "imei2": "",
//         "modelo": "A34"
//     },
//     {
//         "nome": "Maria José da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350433277024518\\/10",
//         "imei2": "",
//         "modelo": "Motorola"
//     },
//     {
//         "nome": "Josildo Gonçalves da Silva",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "322500458830018\\/21",
//         "imei2": "",
//         "modelo": "Moto E22"
//     },
//     {
//         "nome": "Tiago Moura Sampaio Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352980536122390",
//         "imei2": "",
//         "modelo": "iphone SE"
//     },
//     {
//         "nome": "Lindalva Florencio da Silva",
//         "cidade": "SURUBIM",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356905185462801",
//         "imei2": "",
//         "modelo": "iphone 14 pro"
//     },
//     {
//         "nome": "Alexandro Gomes de Carvalho",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353427812319380",
//         "imei2": "",
//         "modelo": "iphone 14 pro"
//     },
//     {
//         "nome": "Carlos fernandes",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "35875417001848501",
//         "imei2": "",
//         "modelo": "S21FE"
//     },
//     {
//         "nome": "Edson ferreira da silva",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861209060418808",
//         "imei2": "",
//         "modelo": "Redmi 12"
//     },
//     {
//         "nome": "Fabiana de Souza",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "86640206750289\\/00",
//         "imei2": "",
//         "modelo": "Redimi Note 12"
//     },
//     {
//         "nome": "Jefferson Lima da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351071529858769",
//         "imei2": "",
//         "modelo": "iphone 15 pro max"
//     },
//     {
//         "nome": "FABIO COSTA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350259990607440",
//         "imei2": "",
//         "modelo": "S23 ULTRA SANSUNG"
//     },
//     {
//         "nome": "EDIVAN LIRA",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351142082487658",
//         "imei2": "",
//         "modelo": "MOTO G71"
//     },
//     {
//         "nome": "FRANKLIN DOS SANTOS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353244108228955",
//         "imei2": "",
//         "modelo": "IPHONE 11 PRO"
//     },
//     {
//         "nome": "ANA CAROLINA",
//         "cidade": "PETROLINA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352561332167936",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "JOSÉ VICENTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354474117088574",
//         "imei2": "",
//         "modelo": "GALAXY A10S"
//     },
//     {
//         "nome": "JOÃO VICTOR",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354702113943156",
//         "imei2": "",
//         "modelo": "GALAXY A71"
//     },
//     {
//         "nome": "GILVANI MIRANDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350596816205218",
//         "imei2": "",
//         "modelo": "MOTO G53"
//     },
//     {
//         "nome": "CLAUDIO CASTOR",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358543580325196",
//         "imei2": "",
//         "modelo": "SANSUNG A55"
//     },
//     {
//         "nome": "IRAN PEREIRA",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352826830256394",
//         "imei2": "",
//         "modelo": "GALAXY M53"
//     },
//     {
//         "nome": "LETICIA CASTOR",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "358543580324116",
//         "imei2": "",
//         "modelo": "GALAXY A55"
//     },
//     {
//         "nome": "PHILIPPE SILVA",
//         "cidade": "BELÉM DE SÃO FRANCISCO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357799157833571",
//         "imei2": "",
//         "modelo": "GALAXY A 54"
//     },
//     {
//         "nome": "RICARDO SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353150466034390",
//         "imei2": "",
//         "modelo": "MOTO E"
//     },
//     {
//         "nome": "MARCELO DA SILVA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "###################",
//         "imei2": "",
//         "modelo": "REDMINOTE 12"
//     },
//     {
//         "nome": "GABRIEL GOMES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356681119522156",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO"
//     },
//     {
//         "nome": "PAULO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351616745186138",
//         "imei2": "",
//         "modelo": "MOTO G 30"
//     },
//     {
//         "nome": "MESSIAS ARRUDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "350263900604950",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "ERIKA DUTRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355109412957896",
//         "imei2": "",
//         "modelo": "MOTO G 32"
//     },
//     {
//         "nome": "MARCIA GERMANO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353269423936602",
//         "imei2": "",
//         "modelo": "galaxy a32"
//     },
//     {
//         "nome": "GABRIEL SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "359506097327178",
//         "imei2": "",
//         "modelo": "MOTO G 7"
//     },
//     {
//         "nome": "JONAS FELIPE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "3543800950807758",
//         "imei2": "",
//         "modelo": "MOTO E 22"
//     },
//     {
//         "nome": "JANIELE GOIS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350784346257541",
//         "imei2": "",
//         "modelo": "GALAXY A 32"
//     },
//     {
//         "nome": "MARCIA SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354494571629994",
//         "imei2": "",
//         "modelo": "MOTO G20"
//     },
//     {
//         "nome": "EVELIN GEOVANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356437101673378",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "SOFIA TAVORA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "357567913661853",
//         "imei2": "",
//         "modelo": "SAMSUNG A25"
//     },
//     {
//         "nome": "ACINEIDE LOPES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351847547340421",
//         "imei2": "",
//         "modelo": "SAMSUNG A14"
//     },
//     {
//         "nome": "EDUARDO FIGUEROA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356722914075519",
//         "imei2": "",
//         "modelo": "SAMSUNG A14"
//     },
//     {
//         "nome": "GABRIEL FERNANDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354103136035049",
//         "imei2": "",
//         "modelo": "SAMSUNG S 22"
//     },
//     {
//         "nome": "MANOELA LAURENTINO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356814117875215",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "ACILENE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351617110710254",
//         "imei2": "",
//         "modelo": "MOTO G 7"
//     },
//     {
//         "nome": "JOSUÉ MARQUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358543581278220",
//         "imei2": "",
//         "modelo": "SAMSUNG A 55"
//     },
//     {
//         "nome": "TACIANA MENDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357341092989935",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "LUCIO PATROCINIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "864539063629507",
//         "imei2": "",
//         "modelo": "XIAOMI REDMI NOT 12"
//     },
//     {
//         "nome": "RITA PATROCINIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353597110070354",
//         "imei2": "",
//         "modelo": "MOTO FUSION"
//     },
//     {
//         "nome": "TIANA SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352537706375099",
//         "imei2": "",
//         "modelo": "MOTO G20"
//     },
//     {
//         "nome": "JOSENILDA GOMES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353854134201493",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO MAX"
//     },
//     {
//         "nome": "LUCILENE TOLEDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354187773186439",
//         "imei2": "",
//         "modelo": "MOTO E13"
//     },
//     {
//         "nome": "SUELMA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "359111107093843",
//         "imei2": "",
//         "modelo": "MOTO G 84"
//     },
//     {
//         "nome": "TEREZINHA SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350039936768773",
//         "imei2": "",
//         "modelo": "GALAXY A12"
//     },
//     {
//         "nome": "BETÂNIA BARBOSA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350795230261597",
//         "imei2": "",
//         "modelo": "GALAXY S23"
//     },
//     {
//         "nome": "CÉLIA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353541240933693",
//         "imei2": "",
//         "modelo": "GALAXY A03S"
//     },
//     {
//         "nome": "DAVI SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO G"
//     },
//     {
//         "nome": "MARIA SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352737599587491",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "SUELI DE BRITO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353037551751857",
//         "imei2": "",
//         "modelo": "MOTO G 54 5G"
//     },
//     {
//         "nome": "JUCIARA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "358287623779148",
//         "imei2": "",
//         "modelo": "GALAXY A05"
//     },
//     {
//         "nome": "´MARIANA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355612587177034",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "MARIA SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "86787063988642",
//         "imei2": "",
//         "modelo": "REDMINOTE 10"
//     },
//     {
//         "nome": "ELIANE ALVES",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO G"
//     },
//     {
//         "nome": "MARIA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "GALAXY A02"
//     },
//     {
//         "nome": "ITAMAR MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO G34"
//     },
//     {
//         "nome": "ALEXANDRA MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356902114354092",
//         "imei2": "",
//         "modelo": "MOTO E03"
//     },
//     {
//         "nome": "ALICE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355178163311645",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "MARINETE FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357799153496381",
//         "imei2": "",
//         "modelo": "GALAXY A54"
//     },
//     {
//         "nome": "REINALDO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "355612580904236",
//         "imei2": "",
//         "modelo": "MOTO G5"
//     },
//     {
//         "nome": "ANTÔNIO GABRIEL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "359521098567781",
//         "imei2": "",
//         "modelo": "MOTO ONE"
//     },
//     {
//         "nome": "LEONARDO SILVA",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "358302233592565",
//         "imei2": "",
//         "modelo": "GALAXY A03"
//     },
//     {
//         "nome": "CHARLENE SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352967354167094",
//         "imei2": "",
//         "modelo": "GALAXY A03"
//     },
//     {
//         "nome": "SUZIE MARTINS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "REDMINOTE 10"
//     },
//     {
//         "nome": "ROSEMARY ALMEIDA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353389393656368",
//         "imei2": "",
//         "modelo": "GALAXY S21"
//     },
//     {
//         "nome": "NÚBIA OLIVEIRA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355332089410045",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "ALAÍDE",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358946833016134",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "SERGIO SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352617321791092",
//         "imei2": "",
//         "modelo": "MOTO G10"
//     },
//     {
//         "nome": "ROSÂNGELA BATISTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353524723207371",
//         "imei2": "",
//         "modelo": "MOTO E7 PLUS"
//     },
//     {
//         "nome": "JOSÉ FRANCISCO",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352996102447557",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "EVANDRO DA SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866228063716047",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "BRUNO SOBRAL",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357980440259465",
//         "imei2": "",
//         "modelo": "GALAXY A15"
//     },
//     {
//         "nome": "MANUEL OLVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357807163189076",
//         "imei2": "",
//         "modelo": "MOTO G62 5G"
//     },
//     {
//         "nome": "MARIA OLIVEIRA",
//         "cidade": "CARNAÍBA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861736061593783",
//         "imei2": "",
//         "modelo": "REDMINOTE 12"
//     },
//     {
//         "nome": "MARIA ALBUQUERQUE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350877073786896",
//         "imei2": "",
//         "modelo": "MOTOROLA G20"
//     },
//     {
//         "nome": "ANA PAULA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353707441239513",
//         "imei2": "",
//         "modelo": "MOTO EDGE"
//     },
//     {
//         "nome": "SOLAGE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358388751227163",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "ROSILENE FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "3352113799773387",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "NEIDIANE AVELINO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353247106433543",
//         "imei2": "",
//         "modelo": "IPHONE 11PRO"
//     },
//     {
//         "nome": "LUCICLEIDE BRUNO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352467928836076",
//         "imei2": "",
//         "modelo": "SAMSUG A15"
//     },
//     {
//         "nome": "SURAMA LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358958559797169",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "MIRLANE ANDRADE",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "86796806046643",
//         "imei2": "",
//         "modelo": "REDMINOTE 12 PRO"
//     },
//     {
//         "nome": "SANDRA ANDRADE",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352467926842787",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "LEONARDO JOSÉ",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869006065284785",
//         "imei2": "",
//         "modelo": "POCO X 5"
//     },
//     {
//         "nome": "ERICA DANTAS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "866589061420365",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "CÉLIO ROBERTO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353907441070090",
//         "imei2": "",
//         "modelo": "EDGE 30 NEO"
//     },
//     {
//         "nome": "MARIA DAS DORES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350513710537760",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "TARSÍSIO EDUARDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351088372027235",
//         "imei2": "",
//         "modelo": "SANSUNG M62"
//     },
//     {
//         "nome": "GABRIELA MESQUITA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "357799152306375",
//         "imei2": "",
//         "modelo": "SANSUNG A53"
//     },
//     {
//         "nome": "THIAGO BRIGIDIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "357103100461483",
//         "imei2": "",
//         "modelo": "SANSUNG A80"
//     },
//     {
//         "nome": "LETÍCIA SANTANA",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354600850762898",
//         "imei2": "",
//         "modelo": "MOTO 32"
//     },
//     {
//         "nome": "RAISSA VIEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351583481580868",
//         "imei2": "",
//         "modelo": "SANSUNG A23"
//     },
//     {
//         "nome": "ALDOMAR CABRAL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355570096956597",
//         "imei2": "",
//         "modelo": "MOTO G7"
//     },
//     {
//         "nome": "ANDRE SAMUEL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350262400859239",
//         "imei2": "",
//         "modelo": "SANSUNG M23"
//     },
//     {
//         "nome": "ENILSON DE LUNA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350456240131698",
//         "imei2": "",
//         "modelo": "SANSUNG S20"
//     },
//     {
//         "nome": "ALEXANDRE MELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "352150116217693",
//         "imei2": "",
//         "modelo": "SANSUNG A 10"
//     },
//     {
//         "nome": "JADSON LIMA",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "354952831004357",
//         "imei2": "",
//         "modelo": "SANSUNG A21"
//     },
//     {
//         "nome": "TAYRONE VIANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356584114574794",
//         "imei2": "",
//         "modelo": "K71"
//     },
//     {
//         "nome": "NILSON CARDOSO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353651142277279",
//         "imei2": "",
//         "modelo": "MOTO G52"
//     },
//     {
//         "nome": "MANOEL FRANCISCO",
//         "cidade": "GRAVATÁ",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355708330639237",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "JOSE DACIO",
//         "cidade": "GRAVATÁ",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356556106209993",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "LUIZ CARLOS",
//         "cidade": "GRAVATÁ",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352905112471176",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "RODERICO RODRIGO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "868378062372280",
//         "imei2": "",
//         "modelo": "XIAOMI NOTE 11"
//     },
//     {
//         "nome": "MANUELLA LOPES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353685811843698",
//         "imei2": "",
//         "modelo": "MOTO G84"
//     },
//     {
//         "nome": "MARCELO REGIS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861144063620268",
//         "imei2": "",
//         "modelo": "REDMI 10 A"
//     },
//     {
//         "nome": "NATALI MELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "354873094254960",
//         "imei2": "",
//         "modelo": "IPHONE X"
//     },
//     {
//         "nome": "ANA PAULA CORDEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355612581398230",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "JOSÉ DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "351932265168475",
//         "imei2": "",
//         "modelo": "MOTO G53"
//     },
//     {
//         "nome": "ALEXSANDRO MANOEL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "39993322669477",
//         "imei2": "",
//         "modelo": "MOTO EDGE 20"
//     },
//     {
//         "nome": "JAINA BOLENA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355358088061216",
//         "imei2": "",
//         "modelo": "IPHONE 7 PLUS"
//     },
//     {
//         "nome": "MARIA EDUARDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350019658219106",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "SANDRA MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350274358669809",
//         "imei2": "",
//         "modelo": "GALAXY A 22"
//     },
//     {
//         "nome": "RENATO RIBEIRO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350596814772011",
//         "imei2": "",
//         "modelo": "MOTO G 34"
//     },
//     {
//         "nome": "ISADORA SENA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352484687514331",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "MARIA SANTANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863138071107241",
//         "imei2": "",
//         "modelo": "REDMI 12"
//     },
//     {
//         "nome": "DOUGLAS SANTANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354998773107336",
//         "imei2": "",
//         "modelo": "MOTO G52"
//     },
//     {
//         "nome": "DIVA FLORÊNCIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353246103801868",
//         "imei2": "",
//         "modelo": "IPHONE 11 PRO"
//     },
//     {
//         "nome": "PAULO SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354460101626800",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "ALDELANE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "GALAXY NOTE 10"
//     },
//     {
//         "nome": "GARDÊNIA CAMPÊLO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "356818099340601",
//         "imei2": "",
//         "modelo": "GALAXY S 9"
//     },
//     {
//         "nome": "MARIA AMORIM",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354188158419965",
//         "imei2": "",
//         "modelo": "GALAXY A 04 E"
//     },
//     {
//         "nome": "WALTER ALCÂNTARA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350513710799394",
//         "imei2": "",
//         "modelo": "NOKIA C21 PLUS"
//     },
//     {
//         "nome": "EMILLY SANTOS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353041117023991",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "ANA NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "ANDREZA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355165988619518",
//         "imei2": "",
//         "modelo": "MOTO E22"
//     },
//     {
//         "nome": "ELEONORURA MELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350093380451386",
//         "imei2": "",
//         "modelo": "Z FLIP3"
//     },
//     {
//         "nome": "SOLANGE SOUZA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350341128585936",
//         "imei2": "",
//         "modelo": "GALAXY M13"
//     },
//     {
//         "nome": "CLAUDIO DE ARAUJO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "GALAXY A 54"
//     },
//     {
//         "nome": "JOSUE SOUSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356959772200926",
//         "imei2": "",
//         "modelo": "GALAXY A03S"
//     },
//     {
//         "nome": "MARCIA MIRANDA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356742457208830",
//         "imei2": "",
//         "modelo": "MOTO G30"
//     },
//     {
//         "nome": "RUTE DE LIMA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359180074666782",
//         "imei2": "",
//         "modelo": "IPHONE 7 PLUS"
//     },
//     {
//         "nome": "REGINA ROSA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "359925999088953",
//         "imei2": "",
//         "modelo": "MOTO E"
//     },
//     {
//         "nome": "MARCOS PAULO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350077380686919",
//         "imei2": "",
//         "modelo": "MOTO G 41"
//     },
//     {
//         "nome": "SÔNIA MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869106066256376",
//         "imei2": "",
//         "modelo": "REDMI 12C"
//     },
//     {
//         "nome": "NÁDIA JESUS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869582055501628",
//         "imei2": "",
//         "modelo": "REDMI 9"
//     },
//     {
//         "nome": "GISELE TETHYS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356554103773400",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "JOSEANE VIEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352081303957231",
//         "imei2": "",
//         "modelo": "SANSUNG A03"
//     },
//     {
//         "nome": "JOSENALDO FREITAS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353037554930755",
//         "imei2": "",
//         "modelo": "MOTOG 54"
//     },
//     {
//         "nome": "SHEYLLA SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354251620732074",
//         "imei2": "",
//         "modelo": "MOTO EDGE30"
//     },
//     {
//         "nome": "VERA LUCIA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "869145078404343",
//         "imei2": "",
//         "modelo": "REDMI 13C"
//     },
//     {
//         "nome": "LUCIANA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351229493350870",
//         "imei2": "",
//         "modelo": "MOTO GA52"
//     },
//     {
//         "nome": "TATIANA NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355109413247",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "CLADEMOQUES BRITO",
//         "cidade": "TABIRA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355896812370932",
//         "imei2": "",
//         "modelo": "MOTOG4"
//     },
//     {
//         "nome": "IZA DANILA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354187772246515",
//         "imei2": "",
//         "modelo": "MOTO E13"
//     },
//     {
//         "nome": "JOSEFA SANTOS",
//         "cidade": "CUMARU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352644400205117",
//         "imei2": "",
//         "modelo": "SANSUNG A34"
//     },
//     {
//         "nome": "JOSEFA SANTOS",
//         "cidade": "CUMARU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "35976402085054",
//         "imei2": "",
//         "modelo": "GALAXY A 03"
//     },
//     {
//         "nome": "REINEIDE SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350456242892784",
//         "imei2": "",
//         "modelo": "GALAXY S 20"
//     },
//     {
//         "nome": "IVAN JAT0BÁ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "LÚCIA NILDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352967355247861",
//         "imei2": "",
//         "modelo": "GALAXY A 13"
//     },
//     {
//         "nome": "GRAÇA MARQUES",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357237102850192",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "EMILY SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863851063313219",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "EDNA ALBUQUERQUE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352467925426871",
//         "imei2": "",
//         "modelo": "GALAXY A 15"
//     },
//     {
//         "nome": "ALEX SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353631307430954",
//         "imei2": "",
//         "modelo": "IPHONE 13 PRO"
//     },
//     {
//         "nome": "THAIS GUEDES",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "355561111478451",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "MARTA SILVA",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "351406758013944",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "ALINE BATISTA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350160486001934",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "ANDREZA FERREIRA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356772085625063",
//         "imei2": "",
//         "modelo": "IPHONE 8 PLUS"
//     },
//     {
//         "nome": "BARBARA MICAELA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358461428928818",
//         "imei2": "",
//         "modelo": "IPHONE 8"
//     },
//     {
//         "nome": "WELLING TON FELIPE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354174105148055",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "ROSINEIDE GONÇALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350589196549073",
//         "imei2": "",
//         "modelo": "GALAXY A 03"
//     },
//     {
//         "nome": "FERNANDO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353614586782857",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "WILLAMS AMPARO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359598835368093",
//         "imei2": "",
//         "modelo": "MOTO G 24"
//     },
//     {
//         "nome": "MARINEIDE MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "359598831463435",
//         "imei2": "",
//         "modelo": "MOTO G 24"
//     },
//     {
//         "nome": "ADRIELE RODRIGUES",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "366431104010480",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "CARLA DANIELA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "353065223046778",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "RAYANE ROCHA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359130336235785",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "MAURO SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352432986746864",
//         "imei2": "",
//         "modelo": "GALAXY A 11"
//     },
//     {
//         "nome": "WALMIR JOSE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359167815384577",
//         "imei2": "",
//         "modelo": "GALAXY A32"
//     },
//     {
//         "nome": "GUSTAVO JOSE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "864048069632887",
//         "imei2": "",
//         "modelo": "REDMI NOT11"
//     },
//     {
//         "nome": "RAQUEL MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358845273541710",
//         "imei2": "",
//         "modelo": "LG K 51"
//     },
//     {
//         "nome": "JAQUELINE MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351390882198120",
//         "imei2": "",
//         "modelo": "ITEU A66"
//     },
//     {
//         "nome": "ELINE DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357290401290529",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "LUZLUZANY ANTÃO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "350877076930632",
//         "imei2": "",
//         "modelo": "MOTOG 22"
//     },
//     {
//         "nome": "TIAGO FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352986099493946",
//         "imei2": "",
//         "modelo": "IPHONE 7"
//     },
//     {
//         "nome": "PAULO HENRIQUE BELCHIOR",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356811119208162",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "VITORIA BEATRIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359676587068424",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "THALISSA EMILLY",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "867837068443099",
//         "imei2": "",
//         "modelo": "POCOX 6"
//     },
//     {
//         "nome": "SAMARA DIAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358670080106709",
//         "imei2": "",
//         "modelo": "GALAXY S8"
//     },
//     {
//         "nome": "BRUNA RAFAELA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353612206794898",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "353884190443374",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "353846105824105",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "351071522298518",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "351187700996028",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "350433277349832",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "359598837162742",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "351808470968976",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "351156460879526",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "350433277349832",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "GIOVANNI XAVIER",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351722111149013",
//         "imei2": "",
//         "modelo": "GALAXY A 50"
//     },
//     {
//         "nome": "LAURILUCE FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35713816804996",
//         "imei2": "",
//         "modelo": "MOTO G 52"
//     },
//     {
//         "nome": "ARTHUR GOMES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350456244790150",
//         "imei2": "",
//         "modelo": "S22"
//     },
//     {
//         "nome": "UBIRAJARA SOARES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353037556069412",
//         "imei2": "",
//         "modelo": "MOTO G 54 5G"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "353960260115355",
//         "imei2": "",
//         "modelo": "GALAXY S 20"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "357567913419674",
//         "imei2": "",
//         "modelo": "GALAXY A 25"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "867701061564121",
//         "imei2": "",
//         "modelo": "POCO M5S"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "350102950703314",
//         "imei2": "",
//         "modelo": "GALAXY S22"
//     },
//     {
//         "nome": "ROSICLÉCIA ARAÚJO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353584119293393",
//         "imei2": "",
//         "modelo": "MOTO G8 PLAY"
//     },
//     {
//         "nome": "AURENICE CAMPOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354936854066831",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "HENRIQUE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350877079466477",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "RICARDO DOS SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869703059917889",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "LEANDRO DE ANDRADE",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "-",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "JOSELITO VIEIRA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358299383204613",
//         "imei2": "",
//         "modelo": "GALAXY A 02"
//     },
//     {
//         "nome": "RUI GOMES",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "352790349400838",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "THAMARA ARAÚJO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355109413264995",
//         "imei2": "",
//         "modelo": "MOTO G32"
//     },
//     {
//         "nome": "LUIZ CALUETE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350915066714796",
//         "imei2": "",
//         "modelo": "GALAXY A 04 S"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "352188105927252",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "-",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "358664884250490",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "DIEGO CRISTIANO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355497362494717",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "NELMA VALETIM",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354835097835574",
//         "imei2": "",
//         "modelo": "IPHONE 13 PRO MAX"
//     },
//     {
//         "nome": "NELMA VALETIM",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352114958947411",
//         "imei2": "",
//         "modelo": "IPHONE 13 PRO MAX"
//     },
//     {
//         "nome": "ROMILDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357799154386250",
//         "imei2": "",
//         "modelo": "SANSUN A54"
//     },
//     {
//         "nome": "RAIANE NATALY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353210481393765",
//         "imei2": "",
//         "modelo": "IHONE 13 PRO"
//     },
//     {
//         "nome": "LUANA LINS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "350577191043549",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "CLAUDIA PAIVA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "868140050903041",
//         "imei2": "",
//         "modelo": "POCO X3"
//     },
//     {
//         "nome": "JOSÉ ANUCIAÇÃO",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "860480051543067",
//         "imei2": "",
//         "modelo": "NOTE 20 PRO"
//     },
//     {
//         "nome": "JOSE",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "860480050543068",
//         "imei2": "",
//         "modelo": "NOTE 20 PRO"
//     },
//     {
//         "nome": "AMANDA CAVALCANTI",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352990116025715",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "ANA RAQUELE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "351475538364620",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "CHARLES ANTONIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "860757060448887",
//         "imei2": "",
//         "modelo": "REALME C30S"
//     },
//     {
//         "nome": "FREDSON FELIPE PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353171120335528",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "PEDRO CHARLES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "357848537271489",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "SILVIO DE LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353389390825107",
//         "imei2": "",
//         "modelo": "SANSUNG S21"
//     },
//     {
//         "nome": "ANA BARBOSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358234535140233",
//         "imei2": "",
//         "modelo": "MOTO G30"
//     },
//     {
//         "nome": "ISABELA CECILIA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356863118485540",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "GEANE JOSE",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352790348742198",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "JOETON FERREIRA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351406759292398",
//         "imei2": "",
//         "modelo": "GALAXY A 34"
//     },
//     {
//         "nome": "LUCIENE MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356115091339917",
//         "imei2": "",
//         "modelo": "IPHONE 8 PLUS"
//     },
//     {
//         "nome": "FLAVIO SANTANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359993323619075",
//         "imei2": "",
//         "modelo": "MOTO EDIGE 20"
//     },
//     {
//         "nome": "VITORIA MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "355165986266718",
//         "imei2": "",
//         "modelo": "MOTO E 22"
//     },
//     {
//         "nome": "RONALDO GONÇALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351865922534830",
//         "imei2": "",
//         "modelo": "LG K41S"
//     },
//     {
//         "nome": "EDVALDO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352467922345488",
//         "imei2": "",
//         "modelo": "GALAXY A 15"
//     },
//     {
//         "nome": "DANILA HONORATO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355123376426061",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "WELTON RODRIGUES",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354600857513252",
//         "imei2": "",
//         "modelo": "MOTO G 32"
//     },
//     {
//         "nome": "EDUARDA MARIA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352790342203130",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "ADELSON RODRIGUES",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "862157061500042",
//         "imei2": "",
//         "modelo": "REDMI NOT12"
//     },
//     {
//         "nome": "WALLACE BEZERRA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "355463471008798",
//         "imei2": "",
//         "modelo": "MOTO G 20"
//     },
//     {
//         "nome": "PATRICIA CLAUDIA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "359167812098055",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "JACIRA DE SOUZA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350236433851538",
//         "imei2": "",
//         "modelo": "MOTO E 22"
//     },
//     {
//         "nome": "ADRIANO ROGERIO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358287620270018",
//         "imei2": "",
//         "modelo": "GALAXY A05"
//     },
//     {
//         "nome": "MILCA CASTRO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350456243572518",
//         "imei2": "",
//         "modelo": "SANSUNG FE S20"
//     },
//     {
//         "nome": "CLAUDIA ROCHA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352500454343115",
//         "imei2": "",
//         "modelo": "MOTO E22"
//     },
//     {
//         "nome": "Julio Cesar Monteiro",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356544394909938",
//         "imei2": "",
//         "modelo": "A54"
//     },
//     {
//         "nome": "Alecsandra chaves",
//         "cidade": "BELO HORIZONTE",
//         "estado": "MG",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359802485936377",
//         "imei2": "",
//         "modelo": "MOTO g"
//     },
//     {
//         "nome": "Cicero Jose de Lima",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350433278023053",
//         "imei2": "",
//         "modelo": "Moto g 14"
//     },
//     {
//         "nome": "Thales Ricardo Capozzoli",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352414570816618",
//         "imei2": "",
//         "modelo": "Samsung M53"
//     },
//     {
//         "nome": "Thaisa Gomes de Souza Capozzoli",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350603382674726",
//         "imei2": "",
//         "modelo": "Samsung A13"
//     },
//     {
//         "nome": "Amanda Ferreira da silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355604121519979",
//         "imei2": "",
//         "modelo": "Moto g14"
//     },
//     {
//         "nome": "Thalia Mayara",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351793390484637",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "Marilene ferreira da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357980441628395",
//         "imei2": "",
//         "modelo": "A15"
//     },
//     {
//         "nome": "Adilson Julio",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353490929236442",
//         "imei2": "",
//         "modelo": "Iphone 12"
//     },
//     {
//         "nome": "Jaqueline Jéssica Soares",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355604121729990",
//         "imei2": "",
//         "modelo": "Moto G 24"
//     },
//     {
//         "nome": "Leonardo Alves Moreira",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350739408049095",
//         "imei2": "",
//         "modelo": "Moto g 13"
//     },
//     {
//         "nome": "Roberta Gomes dos Santos",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863252060106518",
//         "imei2": "",
//         "modelo": "Realme"
//     },
//     {
//         "nome": "Rafael do Carmo Barral",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352500454343115",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "Heron Batista",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357650611039685",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "Saulo Roberto",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "864948062579250",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "José Carlos da Silva",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352326292986497",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "Frederico Batista",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "8641710789122767",
//         "imei2": "",
//         "modelo": "Redmi Note 13"
//     },
//     {
//         "nome": "Rivaldo José Barrozo",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353265117421794",
//         "imei2": "",
//         "modelo": "LG K515"
//     },
//     {
//         "nome": "Kedma Cavalcante",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355017389332623",
//         "imei2": "",
//         "modelo": "Iphone 13"
//     },
//     {
//         "nome": "Wilma Maria das Neves",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353123304286811",
//         "imei2": "",
//         "modelo": "Moto G54"
//     },
//     {
//         "nome": "Valmir Santos",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356959779999801",
//         "imei2": "",
//         "modelo": "Samsung A03S"
//     },
//     {
//         "nome": "Thayanne Romeika",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "860834072845341",
//         "imei2": "",
//         "modelo": "Redmi Note 13"
//     },
//     {
//         "nome": "Pablo Xavier",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356546100041278",
//         "imei2": "",
//         "modelo": "Iphone XR"
//     },
//     {
//         "nome": "Rafael José",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869112050052805",
//         "imei2": "",
//         "modelo": "Redmi 9"
//     },
//     {
//         "nome": "Andrea Virginia",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869147069717147",
//         "imei2": "",
//         "modelo": "Redmi 12"
//     },
//     {
//         "nome": "Jorge Bartolomeu",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353079101725841",
//         "imei2": "",
//         "modelo": "Iphone XR"
//     },
//     {
//         "nome": "Lúcia",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358710332873191",
//         "imei2": "",
//         "modelo": "Iphone 11"
//     },
//     {
//         "nome": "Anderson de Araujo",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358774508056858",
//         "imei2": "",
//         "modelo": "Iphone 13"
//     },
//     {
//         "nome": "Nehemias Gomes",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355612581899252",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "Rosicleide Faustino da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351328053901690",
//         "imei2": "",
//         "modelo": "Moto G 82"
//     },
//     {
//         "nome": "Rômulo Santos",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352177392665006",
//         "imei2": "",
//         "modelo": "Samsung A13"
//     },
//     {
//         "nome": "Marlete Marcolino",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353123304897930",
//         "imei2": "",
//         "modelo": "Moto G41"
//     },
//     {
//         "nome": "Maria josé Oliveira",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359209091330930",
//         "imei2": "",
//         "modelo": "Samsung J08"
//     },
//     {
//         "nome": "Silvania Ribeiro",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356145623441774",
//         "imei2": "",
//         "modelo": "Moto G 73"
//     },
//     {
//         "nome": "Maria Rocha",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359410826010140",
//         "imei2": "",
//         "modelo": "Galaxy A12"
//     },
//     {
//         "nome": "Kecy Guedes da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355604123229056",
//         "imei2": "",
//         "modelo": "Moto G24"
//     },
//     {
//         "nome": "Luciene Maria de Moura",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354673134477013",
//         "imei2": "",
//         "modelo": "Moto G14"
//     },
//     {
//         "nome": "Katia Araujo",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354251622136654",
//         "imei2": "",
//         "modelo": "Motorola EDGE"
//     },
//     {
//         "nome": "MAX DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "358076718404260",
//         "imei2": "",
//         "modelo": "POSITIVO"
//     },
//     {
//         "nome": "Maria Helena",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358467736200717",
//         "imei2": "",
//         "modelo": "MOTO e31"
//     },
//     {
//         "nome": "ISMAR CASSIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "862234054107760",
//         "imei2": "",
//         "modelo": "XIAOME 9"
//     },
//     {
//         "nome": "SÉRGIO NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "357567913875743",
//         "imei2": "",
//         "modelo": "SANSUNG A25"
//     },
//     {
//         "nome": "FAGNER SOUZA",
//         "cidade": "GOIANA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "35699041188735359",
//         "imei2": "",
//         "modelo": "G9 PLUS"
//     },
//     {
//         "nome": "JADILSON SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353619112311634",
//         "imei2": "",
//         "modelo": "MOTO E 7"
//     },
//     {
//         "nome": "Claudia Rodrigues",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356969674642406",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "Adalgiza Souza Lins",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350226905893316",
//         "imei2": "",
//         "modelo": "MOTO E20"
//     },
//     {
//         "nome": "Alba Pereira",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353614584605159",
//         "imei2": "",
//         "modelo": "Moto G04"
//     },
//     {
//         "nome": "Ana Paula",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "865779058155188",
//         "imei2": "",
//         "modelo": "Redmi Paco X3"
//     },
//     {
//         "nome": "Cassandra santos",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356304831412297",
//         "imei2": "",
//         "modelo": "Moto E22"
//     },
//     {
//         "nome": "Eliane Gomes",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350916876186159",
//         "imei2": "",
//         "modelo": "Galaxy A03"
//     },
//     {
//         "nome": "Josafa severino",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "351102691861248",
//         "imei2": "",
//         "modelo": "G MAX2"
//     },
//     {
//         "nome": "Edilene dos Santos",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358287627128078",
//         "imei2": "",
//         "modelo": "Samsung A05"
//     },
//     {
//         "nome": "Lazaro José",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357799152974149",
//         "imei2": "",
//         "modelo": "samsung A54"
//     },
//     {
//         "nome": "Maria dos Prazeres",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359598835596313",
//         "imei2": "",
//         "modelo": "Moto G 24"
//     },
//     {
//         "nome": "Diva Batista Gomes",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352432987337929",
//         "imei2": "",
//         "modelo": "Galaxy A11"
//     },
//     {
//         "nome": "Adelma Ferreira",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354314904758601",
//         "imei2": "",
//         "modelo": "moto G24"
//     },
//     {
//         "nome": "Maria Pereira",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "358958557288146",
//         "imei2": "",
//         "modelo": "Galaxy A14"
//     },
//     {
//         "nome": "Sandra Barbosa",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351932261458839",
//         "imei2": "",
//         "modelo": "Moto G53"
//     },
//     {
//         "nome": "Jucicleide Mafra",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352800822576515",
//         "imei2": "",
//         "modelo": "Moto E22"
//     },
//     {
//         "nome": "Ana Vitória",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353171123329338",
//         "imei2": "",
//         "modelo": "Galaxy A14"
//     },
//     {
//         "nome": "Andreza Hipolito",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356697214984505",
//         "imei2": "",
//         "modelo": "Galaxy A21s"
//     },
//     {
//         "nome": "Valdemir José",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866709042926955",
//         "imei2": "",
//         "modelo": "Redmi 9"
//     },
//     {
//         "nome": "Rafael Juse",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354251622487438",
//         "imei2": "",
//         "modelo": "Neo 30"
//     },
//     {
//         "nome": "Rodrigo Lira",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358543580377114",
//         "imei2": "",
//         "modelo": "Galaxy A55"
//     },
//     {
//         "nome": "Simone Moraes",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350916874052015",
//         "imei2": "",
//         "modelo": "galaxy A03"
//     },
//     {
//         "nome": "Ana Célia",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358467733696818",
//         "imei2": "",
//         "modelo": "Moto G31"
//     },
//     {
//         "nome": "Maria Carolina",
//         "cidade": "IGARASSU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350274350844525",
//         "imei2": "",
//         "modelo": "Galaxy A22"
//     },
//     {
//         "nome": "Fernando Luiz",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359802485811216",
//         "imei2": "",
//         "modelo": "Moto G60S"
//     },
//     {
//         "nome": "Glauxcy Pereira",
//         "cidade": "ABREU E LIMA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "86096952989576",
//         "imei2": "",
//         "modelo": "Xiomi Redmi 9"
//     },
//     {
//         "nome": "Filipe Câmara",
//         "cidade": "IGARASSU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354702110669663",
//         "imei2": "",
//         "modelo": "Galaxy A31"
//     },
//     {
//         "nome": "Julia Galvão",
//         "cidade": "IGARASSU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356561108941023",
//         "imei2": "",
//         "modelo": "Iphone 11"
//     },
//     {
//         "nome": "Jailson Araujo",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350057311379275",
//         "imei2": "",
//         "modelo": "J07"
//     },
//     {
//         "nome": "Cícero da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352081305783981",
//         "imei2": "",
//         "modelo": "Galaxy A03"
//     },
//     {
//         "nome": "Jóselia Nogueira",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354188159012900",
//         "imei2": "",
//         "modelo": "Galaxy A04"
//     },
//     {
//         "nome": "Helena Barbosa",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354188158423223",
//         "imei2": "",
//         "modelo": "Galaxy A04"
//     },
//     {
//         "nome": "Luane Oliveira",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356528182148593",
//         "imei2": "",
//         "modelo": "Iphone 10"
//     },
//     {
//         "nome": "Tânia Maria",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356145626078933",
//         "imei2": "",
//         "modelo": "Moto G73"
//     },
//     {
//         "nome": "Ivanilda Maria da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356586116719350",
//         "imei2": "",
//         "modelo": "Galaxy A11"
//     },
//     {
//         "nome": "Marilia da Conceição da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358958554949971",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "Maria dos Prazeres",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351583484252945",
//         "imei2": "",
//         "modelo": "Galaxy A01s"
//     },
//     {
//         "nome": "Carmem Lucia Felix",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353171123542104",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "Jailton Guilhermino da Silva",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "860244068019267",
//         "imei2": "",
//         "modelo": "Redmi Note 12"
//     },
//     {
//         "nome": "Renato João de Melo",
//         "cidade": "UMBUZEIRO",
//         "estado": "PB",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "351838112679277",
//         "imei2": "",
//         "modelo": "-"
//     },
//     {
//         "nome": "Aline Stheffany",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356429101242429",
//         "imei2": "",
//         "modelo": "Iphone 12"
//     },
//     {
//         "nome": "Ester Stefanny",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356157216612927",
//         "imei2": "",
//         "modelo": "Iphone11"
//     },
//     {
//         "nome": "Henrique Lima",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353267568464802",
//         "imei2": "",
//         "modelo": "iphone 14"
//     },
//     {
//         "nome": "Victor Gabriel",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353428897036360",
//         "imei2": "",
//         "modelo": "galaxy m12"
//     },
//     {
//         "nome": "Flávio Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "351932262808453",
//         "imei2": "",
//         "modelo": "MOTO G53"
//     },
//     {
//         "nome": "SANDRA FELIX",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "355612585684353",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "Rita de Cassia",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "MESTRADO",
//         "nascimento": "",
//         "imei1": "355786375831604",
//         "imei2": "",
//         "modelo": "iphone 13 pro"
//     },
//     {
//         "nome": "Antonio Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353654556876362",
//         "imei2": "",
//         "modelo": "spark C20"
//     },
//     {
//         "nome": "Alcilene Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358288124617365",
//         "imei2": "",
//         "modelo": "Spark 10"
//     },
//     {
//         "nome": "Teofilo Calixto",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869912066656527",
//         "imei2": "",
//         "modelo": "Xiomi"
//     },
//     {
//         "nome": "J. Gabriel",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353101860672152",
//         "imei2": "",
//         "modelo": "Galaxy A05"
//     },
//     {
//         "nome": "Amalia Paulo",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350513710869304",
//         "imei2": "",
//         "modelo": "nokia C21 Plus"
//     },
//     {
//         "nome": "Lucicleide Bezerra",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351328052393113",
//         "imei2": "",
//         "modelo": "Moto G 82"
//     },
//     {
//         "nome": "Simone Santos",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350274352953662",
//         "imei2": "",
//         "modelo": "Galaxy A22"
//     },
//     {
//         "nome": "Alcione Gomes",
//         "cidade": "MORENO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353584118940432",
//         "imei2": "",
//         "modelo": "moto G 8 Play"
//     },
//     {
//         "nome": "Dinarque Farias",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353171121343893",
//         "imei2": "",
//         "modelo": "Galaxy A14"
//     },
//     {
//         "nome": "Antonio Carlos",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356544392207897",
//         "imei2": "",
//         "modelo": "Galaxy A54"
//     },
//     {
//         "nome": "Arnaldo dos Santos",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "866149068918224",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "Jose Tiago",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359925994577059",
//         "imei2": "",
//         "modelo": "Moto G7"
//     },
//     {
//         "nome": "Carlos Feitosa",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863772063730709",
//         "imei2": "",
//         "modelo": "Poco c65"
//     },
//     {
//         "nome": "Aurelio da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354831360661508",
//         "imei2": "",
//         "modelo": "Moto E7"
//     },
//     {
//         "nome": "Elias Bezerra",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355165986170852",
//         "imei2": "",
//         "modelo": "Moto E22"
//     },
//     {
//         "nome": "maria cristina",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355604121501415",
//         "imei2": "",
//         "modelo": "motog24"
//     },
//     {
//         "nome": "vania fracisca",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "358795105488153",
//         "imei2": "",
//         "modelo": "sansung a10"
//     },
//     {
//         "nome": "GABRIEL GUEDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "8690060655108349",
//         "imei2": "",
//         "modelo": "POCOX5PRO"
//     },
//     {
//         "nome": "MOADEGES FRANCA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350433275692993",
//         "imei2": "",
//         "modelo": "MOTOG14"
//     },
//     {
//         "nome": "ALESSANDRA CAMILY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356117092881012",
//         "imei2": "",
//         "modelo": "IPHONE8"
//     },
//     {
//         "nome": "ANDRE LUIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354474119496395",
//         "imei2": "",
//         "modelo": "SANSUNGA10"
//     },
//     {
//         "nome": "Kheyssylley Camilo da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353036115446517",
//         "imei2": "",
//         "modelo": "iphone 12 pro"
//     },
//     {
//         "nome": "Wirginia Maria Pedrosa Gomes",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "8686880605444163",
//         "imei2": "",
//         "modelo": "Xiomi"
//     },
//     {
//         "nome": "Maria Auxiliadora da Silva",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866380066029009",
//         "imei2": "",
//         "modelo": "Xiomi"
//     },
//     {
//         "nome": "Maria da Conceição da Silva Freire",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353269428240778",
//         "imei2": "",
//         "modelo": "Galaxy A19"
//     },
//     {
//         "nome": "Marcella da Silva Freire",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351004640876006",
//         "imei2": "",
//         "modelo": "Galaxy A14"
//     },
//     {
//         "nome": "Helton Eduardo C. Borges",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "869514052063054",
//         "imei2": "",
//         "modelo": "Redimi 9A"
//     },
//     {
//         "nome": "André Luis Sales de Menezes",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358958557244172",
//         "imei2": "",
//         "modelo": "Galaxy A14"
//     },
//     {
//         "nome": "Maria Lindomar Beaerra",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "3544945762069961",
//         "imei2": "",
//         "modelo": "Moto G 20"
//     },
//     {
//         "nome": "Elenilda Pereira da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359473084421029",
//         "imei2": "",
//         "modelo": "iphone 7 pro"
//     },
//     {
//         "nome": "Luiza Gabriele",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352800821030795",
//         "imei2": "",
//         "modelo": "Moto E 22"
//     },
//     {
//         "nome": "Andrea Patricia",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350739402599251",
//         "imei2": "",
//         "modelo": "Moto E 13"
//     },
//     {
//         "nome": "Vanessa da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356977533358239",
//         "imei2": "",
//         "modelo": "MotoG34"
//     },
//     {
//         "nome": "Dayane Freitas",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861990061626826",
//         "imei2": "",
//         "modelo": "Xaomi 23021"
//     },
//     {
//         "nome": "Crsitiane maria dos santos",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "3576517114555496",
//         "imei2": "",
//         "modelo": "Galaxy A13"
//     },
//     {
//         "nome": "Maria Bernadete Munis",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356697218489493",
//         "imei2": "",
//         "modelo": "Galaxy a 21s"
//     },
//     {
//         "nome": "Maria Jose da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353037551294452",
//         "imei2": "",
//         "modelo": "Moto G54"
//     },
//     {
//         "nome": "Maria aparecida Ferreira",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359410826039289",
//         "imei2": "",
//         "modelo": "galaxy a12"
//     },
//     {
//         "nome": "Fabricio dos Santos",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358466112812632",
//         "imei2": "",
//         "modelo": "Moto e22"
//     },
//     {
//         "nome": "Franciele Santos silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356399381107255",
//         "imei2": "",
//         "modelo": "Galaxy a03"
//     },
//     {
//         "nome": "Ronaldo Manoel Honorio",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350879695515372",
//         "imei2": "",
//         "modelo": "Galaxy A10"
//     },
//     {
//         "nome": "Franklim Alison dos Santos",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357898254605054",
//         "imei2": "",
//         "modelo": "Moto S30"
//     },
//     {
//         "nome": "Maria Rosicleide",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354957931327913",
//         "imei2": "",
//         "modelo": "Moto g20"
//     },
//     {
//         "nome": "Maria de Fatima",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "351583480867365",
//         "imei2": "",
//         "modelo": "SAMSUNGA23"
//     },
//     {
//         "nome": "Eunice Maria",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "351932265579994",
//         "imei2": "",
//         "modelo": "Mototola Moto G53"
//     },
//     {
//         "nome": "Willyan Candido",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356680116309864",
//         "imei2": "",
//         "modelo": "Iphone 12 pro"
//     },
//     {
//         "nome": "Ana Lucia",
//         "cidade": "GOIANA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352467924194801",
//         "imei2": "",
//         "modelo": "Galaxy A15"
//     },
//     {
//         "nome": "Maria Santos",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358958552844356",
//         "imei2": "",
//         "modelo": "Galaxy A14"
//     },
//     {
//         "nome": "José Cláudio",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352165091113717",
//         "imei2": "",
//         "modelo": "Galaxy A15"
//     },
//     {
//         "nome": "Fátima Barretto",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866380066997205",
//         "imei2": "",
//         "modelo": "Redimi Note 12s"
//     },
//     {
//         "nome": "Fernanda Alves",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354248587473619",
//         "imei2": "",
//         "modelo": "Iphone 14"
//     },
//     {
//         "nome": "Maricelma Barros",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354103135321952",
//         "imei2": "",
//         "modelo": "Samsung S22"
//     },
//     {
//         "nome": "Genivaldo Antônio",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "351266058133671",
//         "imei2": "",
//         "modelo": "LG K8"
//     },
//     {
//         "nome": "Luciana Maria",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350310751910679",
//         "imei2": "",
//         "modelo": "Moto E20"
//     },
//     {
//         "nome": "Adjoelma Marques",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "343941303842676",
//         "imei2": "",
//         "modelo": "iphone 13 pro"
//     },
//     {
//         "nome": "Marilia Patricia",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352924115618725",
//         "imei2": "",
//         "modelo": "iphone11"
//     },
//     {
//         "nome": "Gilvania Barbosa",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358710093944652",
//         "imei2": "",
//         "modelo": "iphone 8"
//     },
//     {
//         "nome": "Maria de Jesus da Silva",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357268114325741",
//         "imei2": "",
//         "modelo": "galaxy a02"
//     },
//     {
//         "nome": "Maria da conceicao",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "861855057825767",
//         "imei2": "",
//         "modelo": "Poco x3 pro"
//     },
//     {
//         "nome": "Danilo Gomes Nascimento",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358466361156434",
//         "imei2": "",
//         "modelo": "motorola 3 fusion"
//     },
//     {
//         "nome": "Jadeilton de Oliveira",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353386380842738",
//         "imei2": "",
//         "modelo": "motog5s"
//     },
//     {
//         "nome": "Claudineide da Silva",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354154105741836",
//         "imei2": "",
//         "modelo": "moto one Vision"
//     },
//     {
//         "nome": "José Ademar",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356586111881858",
//         "imei2": "",
//         "modelo": "K52"
//     },
//     {
//         "nome": "Eline Passos",
//         "cidade": "RIO DE JANEIRO",
//         "estado": "RJ",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355344101230160",
//         "imei2": "",
//         "modelo": "S10 plus"
//     },
//     {
//         "nome": "Gloria Cardoso",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351759110416449",
//         "imei2": "",
//         "modelo": "A30 s"
//     },
//     {
//         "nome": "Gleyciane de Sá",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351004644710946",
//         "imei2": "",
//         "modelo": "A14"
//     },
//     {
//         "nome": "Maria da Penha",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355037997210797",
//         "imei2": "",
//         "modelo": "Moto E7"
//     },
//     {
//         "nome": "Paula Oliveira",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353960260621782",
//         "imei2": "",
//         "modelo": "S20 Fe"
//     },
//     {
//         "nome": "Amanda Costa",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351094673323504",
//         "imei2": "",
//         "modelo": "Iphone 13"
//     },
//     {
//         "nome": "Marigan Cardoso Andrade",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358922211971315",
//         "imei2": "",
//         "modelo": "Moto G9"
//     },
//     {
//         "nome": "Rosangela Maria Brito",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350320123166686",
//         "imei2": "",
//         "modelo": "Samsung S20"
//     },
//     {
//         "nome": "Andréia Lúcia",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "862938065380089",
//         "imei2": "",
//         "modelo": "Redmi Note 12"
//     },
//     {
//         "nome": "André Cosmo",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "359410827791532",
//         "imei2": "",
//         "modelo": "Samsung A12"
//     },
//     {
//         "nome": "Lucasda Rocha Costa",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351847547086677",
//         "imei2": "",
//         "modelo": "Samsung A10"
//     },
//     {
//         "nome": "Dione Gomes Faria",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351331725225472",
//         "imei2": "",
//         "modelo": "Galaxy S21 FE"
//     },
//     {
//         "nome": "Carlos Souza",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "865792063551903",
//         "imei2": "",
//         "modelo": "xiaomi not 12"
//     },
//     {
//         "nome": "Gustavo Henrique Barbosa",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353171122779699",
//         "imei2": "",
//         "modelo": "Samsung A14"
//     },
//     {
//         "nome": "YONNÁ TABOSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353974646185073",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "GEOVANE PESSOA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359822212225612",
//         "imei2": "",
//         "modelo": "G9 MOTO"
//     },
//     {
//         "nome": "RAFAEL JOSÉ ALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350596818867032",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "SEVERINO RAMOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351799221752936",
//         "imei2": "",
//         "modelo": "MOTO G 53 5G"
//     },
//     {
//         "nome": "ISANIRA DOS ANJOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353240583888529",
//         "imei2": "",
//         "modelo": "IPHONE 13 PRO MAX"
//     },
//     {
//         "nome": "ALFREDO DA SILVA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "862533062095267",
//         "imei2": "",
//         "modelo": "REDMI NOTE 10 5G"
//     },
//     {
//         "nome": "Almira Carla Martins de Oliveira Alves",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352326292858696",
//         "imei2": "",
//         "modelo": "Moto G 54 5G"
//     },
//     {
//         "nome": "MARIA DO CARMO DO NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "359410820736003",
//         "imei2": "",
//         "modelo": "GALAXY A12"
//     },
//     {
//         "nome": "MARIA APARECIDA BRUTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353291453566158",
//         "imei2": "",
//         "modelo": "GALAX A04"
//     },
//     {
//         "nome": "LIONIZA SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "868721050005562",
//         "imei2": "",
//         "modelo": "POCCO X3 PRO"
//     },
//     {
//         "nome": "CLAUDIA MELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355772262827293",
//         "imei2": "",
//         "modelo": "MOTO EDGE 30"
//     },
//     {
//         "nome": "LEANDRO FREITAS PINTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "869244075992705",
//         "imei2": "",
//         "modelo": "XIAOMI NOTE 13"
//     },
//     {
//         "nome": "GILSON NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358287628261167",
//         "imei2": "",
//         "modelo": "GALAX A05"
//     },
//     {
//         "nome": "RAQUEL SOUZA DE FREITAS PINTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866829069349244",
//         "imei2": "",
//         "modelo": "NOTE 12 PRO 5G"
//     },
//     {
//         "nome": "TABITA FERNANDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356145623439455",
//         "imei2": "",
//         "modelo": "MOTO G73"
//     },
//     {
//         "nome": "PAULO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "3595060907777452",
//         "imei2": "",
//         "modelo": "MOTO G7 POWER"
//     },
//     {
//         "nome": "LUCIANA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350877076221396",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "MARIA ANDRADE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355043091592429",
//         "imei2": "",
//         "modelo": "GALAXY A8"
//     },
//     {
//         "nome": "KAIO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "350456240024000",
//         "imei2": "",
//         "modelo": "GALAXY S20 FE"
//     },
//     {
//         "nome": "LUCIENE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "ANDERSON BEZERRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350877076974358",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "JEFERSON SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350877076860276",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "ROSEMARI SIRQUEIRA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352967354755054",
//         "imei2": "",
//         "modelo": "GALAX A013"
//     },
//     {
//         "nome": "ETELVINA RAMOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359761366687733",
//         "imei2": "",
//         "modelo": "MOTO G 10"
//     },
//     {
//         "nome": "ROSANGELA SIQUEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354936852974010",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "EUGENIA DOS REIS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351229492155056",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "SHIRLEY OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353689470711279",
//         "imei2": "",
//         "modelo": "MOTO E 22"
//     },
//     {
//         "nome": "JOSÉ PEDRO DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353248872390016",
//         "imei2": "",
//         "modelo": "MOTO E 7 POWER"
//     },
//     {
//         "nome": "JOSUEL PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355497362285297",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "LUIZA VICTORIA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353269429688728",
//         "imei2": "",
//         "modelo": "SANSUNG A 32 S"
//     },
//     {
//         "nome": "MARIA EDUARDA MENEZES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358461422654527",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "RAFAELA MIAMOTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359308705492241",
//         "imei2": "",
//         "modelo": "IPHONE 13 PRO MAX"
//     },
//     {
//         "nome": "FABIO DE MORAES",
//         "cidade": "MACEIÓ",
//         "estado": "AL",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35289616623278",
//         "imei2": "",
//         "modelo": "GALAXY M 13"
//     },
//     {
//         "nome": "ARTHUR DE MORAES",
//         "cidade": "MACEIÓ",
//         "estado": "AL",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350341124791769",
//         "imei2": "",
//         "modelo": "GALAXY M 13"
//     },
//     {
//         "nome": "GIVANILDO DE MELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "351797386386615",
//         "imei2": "",
//         "modelo": "GALAXY A 01"
//     },
//     {
//         "nome": "THAIS SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353919107997045",
//         "imei2": "",
//         "modelo": "IPHONE 11 PRO"
//     },
//     {
//         "nome": "DARLAN LOPES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354936854699714",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "ANA PAULA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "351331724182229",
//         "imei2": "",
//         "modelo": "SANSUNG S 21"
//     },
//     {
//         "nome": "LUIZ DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356434101791383",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "REGINALDO DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356955703182811",
//         "imei2": "",
//         "modelo": "IPHONE 13 PRO MAX"
//     },
//     {
//         "nome": "JOSÉ ADRIANO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353287219223571",
//         "imei2": "",
//         "modelo": "IPHONE 13 PRO MAX"
//     },
//     {
//         "nome": "EUGENIO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354985980834174",
//         "imei2": "",
//         "modelo": "GALAXY A 03"
//     },
//     {
//         "nome": "MARIA DE LOURDES DA SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356338106153723",
//         "imei2": "",
//         "modelo": "iphone 11"
//     },
//     {
//         "nome": "SEBASTIANA MARIA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353037554321716",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "EVERALDO BEZERRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357233108672235",
//         "imei2": "",
//         "modelo": "MOTO ONE MACRO"
//     },
//     {
//         "nome": "LUIZ CARLOS BEZERRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "860820077656585",
//         "imei2": "",
//         "modelo": "REDMI 13C"
//     },
//     {
//         "nome": "SUZANE MARINA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353037557058638",
//         "imei2": "",
//         "modelo": "MOTOG 54"
//     },
//     {
//         "nome": "JOSE MARIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "ANTONIO JOSE DE QUEIROZ",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359506099069877",
//         "imei2": "",
//         "modelo": "MOTO G7 POWER"
//     },
//     {
//         "nome": "JESSEM SILVA DOS SANTOS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "355604122786676",
//         "imei2": "",
//         "modelo": "MOTO G 24"
//     },
//     {
//         "nome": "MARIA MADALENA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350236433782410",
//         "imei2": "",
//         "modelo": "MOTO E 22"
//     },
//     {
//         "nome": "ENOCK DA SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350236431740493",
//         "imei2": "",
//         "modelo": "MOTO E 22"
//     },
//     {
//         "nome": "MARIA DAS GRAÇAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358287626853098",
//         "imei2": "",
//         "modelo": "GALAXY A5"
//     },
//     {
//         "nome": "ELIDIANE SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "35359511730250",
//         "imei2": "",
//         "modelo": "MOTO G 8 POWER"
//     },
//     {
//         "nome": "ANTONIO LIMA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "353046280690286",
//         "imei2": "",
//         "modelo": "GALXY A 22"
//     },
//     {
//         "nome": "HYAGO WERNER",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "355125537416121",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "SABRINA JULLYANE",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "867739059293519",
//         "imei2": "",
//         "modelo": "XIAOMI 11 LITE"
//     },
//     {
//         "nome": "ARGEMIRO ANASTACIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358287627410757",
//         "imei2": "",
//         "modelo": "GALAXY A 05"
//     },
//     {
//         "nome": "LIANDRA LAURA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356909116874258",
//         "imei2": "",
//         "modelo": "MOTO G FUSION"
//     },
//     {
//         "nome": "ISAQUE MARIANO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "861188074781767",
//         "imei2": "",
//         "modelo": "REDMI A3"
//     },
//     {
//         "nome": "TATIANE CRISTIANE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354974386068009",
//         "imei2": "",
//         "modelo": "GALAXY A05"
//     },
//     {
//         "nome": "ALMIR PEDROSO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355560111542050",
//         "imei2": "",
//         "modelo": "MOTO G 9"
//     },
//     {
//         "nome": "AMAURY SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350039935688170",
//         "imei2": "",
//         "modelo": "GALAXY A12"
//     },
//     {
//         "nome": "JOSÉ MIGUEL DE SOUZA",
//         "cidade": "ABREU E LIMA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "865233055875117",
//         "imei2": "",
//         "modelo": "REDMI"
//     },
//     {
//         "nome": "MARIA DA CONÇEIÇÃO DE SANTANA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354327117241918",
//         "imei2": "",
//         "modelo": "LGK61"
//     },
//     {
//         "nome": "LUZINETE DUARTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350739405209353",
//         "imei2": "",
//         "modelo": "MOTOG13"
//     },
//     {
//         "nome": "POLYANA QUEIROZ",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353514350330349",
//         "imei2": "",
//         "modelo": "IPHONE14"
//     },
//     {
//         "nome": "DANIEL QUEIROZ",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358615316608283",
//         "imei2": "",
//         "modelo": "SANSUNG S23"
//     },
//     {
//         "nome": "EDUARDO ALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "3564500526785883",
//         "imei2": "",
//         "modelo": "SANSUNG A 11"
//     },
//     {
//         "nome": "BRUNO REYNALDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "35082334460623425",
//         "imei2": "",
//         "modelo": "SANSUNG 23"
//     },
//     {
//         "nome": "AUGUSTO NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "IPHONE15"
//     },
//     {
//         "nome": "CRISTIANE F. SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "865001060339571",
//         "imei2": "",
//         "modelo": "REDMI51"
//     },
//     {
//         "nome": "PABLO FREITAS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350340393738030",
//         "imei2": "",
//         "modelo": "IPHONE13"
//     },
//     {
//         "nome": "JORGEANNE FAUSTINA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357138168569496",
//         "imei2": "",
//         "modelo": "MOTO G 5"
//     },
//     {
//         "nome": "SEBASTIANA MARIA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "3303755432176",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "TATIANA MARIA DA COSTA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "3589946833250717",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "EDUARDO EUGENIO DOS SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355514118143446",
//         "imei2": "",
//         "modelo": "GALAXY A 11"
//     },
//     {
//         "nome": "MARLENE LINS E SILVA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355883610928707",
//         "imei2": "",
//         "modelo": "IPHONE11"
//     },
//     {
//         "nome": "EDNA MARIA QUEIROZ",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351102692317901",
//         "imei2": "",
//         "modelo": "MUTILASER GMAX2"
//     },
//     {
//         "nome": "NIEDJA BARROS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "3553570889657279",
//         "imei2": "",
//         "modelo": "IPHONE 7"
//     },
//     {
//         "nome": "CLEBERSON LIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350226909625094",
//         "imei2": "",
//         "modelo": "MOTO 20"
//     },
//     {
//         "nome": "CARLA LUCENA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352177392602165",
//         "imei2": "",
//         "modelo": "GAL A 13"
//     },
//     {
//         "nome": "CRISTIANE MARIA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352636445331320",
//         "imei2": "",
//         "modelo": "G PRO"
//     },
//     {
//         "nome": "SANDRA REGINA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354600856310734",
//         "imei2": "",
//         "modelo": "MOTO G 32"
//     },
//     {
//         "nome": "ADEILDO WANDERLEY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355165981544572",
//         "imei2": "",
//         "modelo": "´MOTO E 22"
//     },
//     {
//         "nome": "AMANDA DIAS",
//         "cidade": "IGARASSU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861239057567846",
//         "imei2": "",
//         "modelo": "REDMI 11 PRO PLUS"
//     },
//     {
//         "nome": "AMANDA DIAS",
//         "cidade": "IGARASSU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863164066778069",
//         "imei2": "",
//         "modelo": "REDMI 12 5G"
//     },
//     {
//         "nome": "JANAINA REGINA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353171125187544",
//         "imei2": "",
//         "modelo": "SANSUNG A 14"
//     },
//     {
//         "nome": "WALDIR MARIANO DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350877076900999",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "VALDESIO RAMOS",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352385103076260",
//         "imei2": "",
//         "modelo": "ASUS_X01"
//     },
//     {
//         "nome": "ANDRE SALES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353568696901320",
//         "imei2": "",
//         "modelo": "SANSUNG A 23"
//     },
//     {
//         "nome": "WILTON GOMES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354091573270288",
//         "imei2": "",
//         "modelo": "SANSUNG M54"
//     },
//     {
//         "nome": "ANGELA MARIA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359598831751599",
//         "imei2": "",
//         "modelo": "MOTO G 24"
//     },
//     {
//         "nome": "SUELI MEDEIROS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350409873954670",
//         "imei2": "",
//         "modelo": "GALAXY A 04E"
//     },
//     {
//         "nome": "RENATO DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356417992005542",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "GUSTAVO SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357697828271769",
//         "imei2": "",
//         "modelo": "TECNO SPARK 10 PRO"
//     },
//     {
//         "nome": "ROGERIO DANTAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354291426577109",
//         "imei2": "",
//         "modelo": "SANSUNG A 12"
//     },
//     {
//         "nome": "LUCIENE ELISA PONCIANO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "350262400005650",
//         "imei2": "",
//         "modelo": "GALAXY M23"
//     },
//     {
//         "nome": "JOSE ROBERTO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350409872457857",
//         "imei2": "",
//         "modelo": "GALAXY A04E"
//     },
//     {
//         "nome": "ANDEILTON DINIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356722910471936",
//         "imei2": "",
//         "modelo": "GALAXY A 15"
//     },
//     {
//         "nome": "FABIANA MARIA",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356450526372385",
//         "imei2": "",
//         "modelo": "GALAXY A14"
//     },
//     {
//         "nome": "MARIA DA CONCEIÇÃO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350409872745236",
//         "imei2": "",
//         "modelo": "GALAXY A 04E"
//     },
//     {
//         "nome": "BETANIA LOPES",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358287626625579",
//         "imei2": "",
//         "modelo": "GALAXY A 05"
//     },
//     {
//         "nome": "JOCICLEIDE DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354219790467953",
//         "imei2": "",
//         "modelo": "SANSUNG A11"
//     },
//     {
//         "nome": "ADRIANA FARIAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354998779788659",
//         "imei2": "",
//         "modelo": "MOTO G 52"
//     },
//     {
//         "nome": "ANDRIANA KEDIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861052071112284",
//         "imei2": "",
//         "modelo": "XIAOMI L20"
//     },
//     {
//         "nome": "JOSIVALDO DOS SANTOS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352977108399521",
//         "imei2": "",
//         "modelo": "GALAXY J4"
//     },
//     {
//         "nome": "ILZA QUERIDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358299386285189",
//         "imei2": "",
//         "modelo": "GALAXY A 02"
//     },
//     {
//         "nome": "HENRIQUE LUIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "354476110217787",
//         "imei2": "",
//         "modelo": "GALAXY A 30 S"
//     },
//     {
//         "nome": "RICARDO JORGE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353448665641134",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "ROMULO MACHADO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353556113190304",
//         "imei2": "",
//         "modelo": "LASER"
//     },
//     {
//         "nome": "HERMANN LUIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358287628499494",
//         "imei2": "",
//         "modelo": "SANSUNG A 05"
//     },
//     {
//         "nome": "ADEILSON MARIANO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350513710860287",
//         "imei2": "",
//         "modelo": "NOKIA C21"
//     },
//     {
//         "nome": "MARCOS FERNANDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357400092872168",
//         "imei2": "",
//         "modelo": "IPHONE 8 PLUS"
//     },
//     {
//         "nome": "ALCIDES NUNES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357799154234153",
//         "imei2": "",
//         "modelo": "GALAXY A54"
//     },
//     {
//         "nome": "MARIA DO BOM PARTO",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355037995537696",
//         "imei2": "",
//         "modelo": "MOTO E 7 PLUS"
//     },
//     {
//         "nome": "JAILTON SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "351004640898513",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "JOEL LIMA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354476111885186",
//         "imei2": "",
//         "modelo": "A305"
//     },
//     {
//         "nome": "MARIA DO CARMO DOS SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355015105521495",
//         "imei2": "",
//         "modelo": "GALAXY S10"
//     },
//     {
//         "nome": "MARIA DA CONCEIÇÃO DE ARAUJO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356145623450114",
//         "imei2": "",
//         "modelo": "MOTO G 73"
//     },
//     {
//         "nome": "ADILSON SANTANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356039105128514",
//         "imei2": "",
//         "modelo": "GALAXY M20"
//     },
//     {
//         "nome": "VARONILDO GUILERMINO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353037552197613",
//         "imei2": "",
//         "modelo": "GALAXY M20"
//     },
//     {
//         "nome": "ALINE ROCHA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356039105128514",
//         "imei2": "",
//         "modelo": "GALAXY M20"
//     },
//     {
//         "nome": "ROBERVALDO JOSÉ",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "359410829140258",
//         "imei2": "",
//         "modelo": "SANSUNG A12"
//     },
//     {
//         "nome": "JOÃO HENRIQUE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357567915849084",
//         "imei2": "",
//         "modelo": "SANSUNG A25"
//     },
//     {
//         "nome": "DIEGO NASCIMENTO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "862157061559766",
//         "imei2": "",
//         "modelo": "NOTE 12"
//     },
//     {
//         "nome": "WESLEY RUAN",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351588824947682",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "PLINIO DIAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "866129062791066",
//         "imei2": "",
//         "modelo": "POCO 6X"
//     },
//     {
//         "nome": "JOSIMAR BARBOSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354103135404733",
//         "imei2": "",
//         "modelo": "GALAXY S22"
//     },
//     {
//         "nome": "GUILHERME NERY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357136793396137",
//         "imei2": "",
//         "modelo": "15 PLUS"
//     },
//     {
//         "nome": "VALDOMIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "862480063586508",
//         "imei2": "",
//         "modelo": "REDMI 12C"
//     },
//     {
//         "nome": "JOSEMERE CAROLINA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356342090679164",
//         "imei2": "",
//         "modelo": "GALAXY J5 PRIME"
//     },
//     {
//         "nome": "IVANA BONIFACIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354936855548738",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "VITORIA THALIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355612581402073",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "GISELE MEDEIROS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356498101917785",
//         "imei2": "",
//         "modelo": "IPHONE SE 2º GERAÇ."
//     },
//     {
//         "nome": "GILDSON FERRAZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358082908609585",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "PAULO JOSE MONTEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359802483242810",
//         "imei2": "",
//         "modelo": "MOTO G60"
//     },
//     {
//         "nome": "MIKELY FERREIRA",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355100981503799",
//         "imei2": "",
//         "modelo": "A3"
//     },
//     {
//         "nome": "LEONARDO SANTOS DO NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "89550318003210557095",
//         "imei2": "",
//         "modelo": "REDMI NOTE 13"
//     },
//     {
//         "nome": "GILVAN MENDES NERY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356914111221372",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "WELLINGTON SOARES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351798810192637",
//         "imei2": "",
//         "modelo": "GALAXY A22"
//     },
//     {
//         "nome": "DAVI CARLOS BRAGA DA SILVA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "3549368574971161",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "FLAVIANA BEATRIZ BARRETO ALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353066118509029",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "WUEMBLEY COSTA DE SOUZA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353594111432295",
//         "imei2": "",
//         "modelo": "MOTO G8PLUS"
//     },
//     {
//         "nome": "FABIOLA SOUTO MAIOR DE MATOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355084696183578",
//         "imei2": "",
//         "modelo": "MOTO E POWER"
//     },
//     {
//         "nome": "LAIANY GOMES",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866479060940367",
//         "imei2": "",
//         "modelo": "XIAOMI REDMI 10 C"
//     },
//     {
//         "nome": "JESSICA ALBUQUERQUE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351071522326129",
//         "imei2": "",
//         "modelo": "IPHONE 15 PRO MAX"
//     },
//     {
//         "nome": "LUCIANA CAVALCANTI",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355037990703012",
//         "imei2": "",
//         "modelo": "MOTO G 7"
//     },
//     {
//         "nome": "SUELI GOMES",
//         "cidade": "ITAMARACÁ",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352414571807749",
//         "imei2": "",
//         "modelo": "SAMSUNG J10"
//     },
//     {
//         "nome": "CARLOS ANTONIO OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358110363586129",
//         "imei2": "",
//         "modelo": "NÃO INFORMADO"
//     },
//     {
//         "nome": "JOSIVALDO SEVERINO DO MONTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357291121121499",
//         "imei2": "",
//         "modelo": "LG K52"
//     },
//     {
//         "nome": "MARLI MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351799222876957",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "MANOEL ARAUJO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350844812537618",
//         "imei2": "",
//         "modelo": "MOTO G"
//     },
//     {
//         "nome": "LORENA MANOELE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354068583757066",
//         "imei2": "",
//         "modelo": "IPHONE 15 PRO MAX"
//     },
//     {
//         "nome": "GORETTI ACIOLI",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351090690386756",
//         "imei2": "",
//         "modelo": "LGK41S"
//     },
//     {
//         "nome": "ANDREA OLIVEIRA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354437770009518",
//         "imei2": "",
//         "modelo": "GALAXY S20 FE"
//     },
//     {
//         "nome": "EVANIA LUCIANO DA SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351847545889239",
//         "imei2": "",
//         "modelo": "SAMSUNG J10"
//     },
//     {
//         "nome": "EDNALDO FERREIRA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353541240649133",
//         "imei2": "",
//         "modelo": "MOTO ED40"
//     },
//     {
//         "nome": "DIVA MARIA DE LACERDA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "335051310988021",
//         "imei2": "",
//         "modelo": "NOKIA C21"
//     },
//     {
//         "nome": "MARIA SOLANGE FRANÇA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353065224253126",
//         "imei2": "",
//         "modelo": "GALAXY M54"
//     },
//     {
//         "nome": "MARIA DO SOCORRO RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353541240649133",
//         "imei2": "",
//         "modelo": "GALAXY A03s"
//     },
//     {
//         "nome": "EDMILSON DE FRANCA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352906116061856",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "VALDMIR NAZARIO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354539519920861",
//         "imei2": "",
//         "modelo": "SANSUNG A 12"
//     },
//     {
//         "nome": "JOSE FLAVIO MARIANO",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359340982963719",
//         "imei2": "",
//         "modelo": "MOTO E 13"
//     },
//     {
//         "nome": "ELIANE PINHEIRO DE LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354600857948052",
//         "imei2": "",
//         "modelo": "MOTO G 32"
//     },
//     {
//         "nome": "FRANCIELE MARIA DE LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357340091723998",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "IVANILDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "322537706010738",
//         "imei2": "",
//         "modelo": "MOTO G 20"
//     },
//     {
//         "nome": "FRANCISCA DE PAIVA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352419912131733",
//         "imei2": "",
//         "modelo": "MOTO G 04"
//     },
//     {
//         "nome": "WELLINGTON FRANCISCO",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353685812767433",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "MARIA MARLUCE",
//         "cidade": "SERRA TALHADA",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "863856065032541",
//         "imei2": "",
//         "modelo": "REDIMI NOT 11"
//     },
//     {
//         "nome": "ELIZABETE AZEVEDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "862984072519897",
//         "imei2": "",
//         "modelo": "REDIMI NOT 50"
//     },
//     {
//         "nome": "GUSTAVO PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "35261732432591",
//         "imei2": "",
//         "modelo": "MOTO G 10"
//     },
//     {
//         "nome": "DINO RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350312164472198",
//         "imei2": "",
//         "modelo": "MOTO G 23"
//     },
//     {
//         "nome": "GLEIDSON MAIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350739405829739",
//         "imei2": "",
//         "modelo": "MOTO E 13"
//     },
//     {
//         "nome": "CLAURIA SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356399380323796",
//         "imei2": "",
//         "modelo": "GALAXY A03"
//     },
//     {
//         "nome": "AMILTON LEITE",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350784344252692",
//         "imei2": "",
//         "modelo": "GALAXY A32"
//     },
//     {
//         "nome": "ANTONIO RODRIGUES",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358958557548846",
//         "imei2": "",
//         "modelo": "SANSUNG A 14"
//     },
//     {
//         "nome": "ELIANE MARIA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354560773073254",
//         "imei2": "",
//         "modelo": "MOTO E 6 I"
//     },
//     {
//         "nome": "MAURICEA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358008521192352",
//         "imei2": "",
//         "modelo": "MOTO E"
//     },
//     {
//         "nome": "PATRICIA LIDI",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358692104417375",
//         "imei2": "",
//         "modelo": "GALAXY A10"
//     },
//     {
//         "nome": "MARIA APARECIDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352563772385914",
//         "imei2": "",
//         "modelo": "GALAXY A 05"
//     },
//     {
//         "nome": "SEVERINO NILO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "868517061077545",
//         "imei2": "",
//         "modelo": "REDMI 10"
//     },
//     {
//         "nome": "MARIA RENILDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "357239737452378",
//         "imei2": "",
//         "modelo": "MOTO G 7"
//     },
//     {
//         "nome": "JEFFERSON JEAN",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354474110480208",
//         "imei2": "",
//         "modelo": "GALAXY A 10"
//     },
//     {
//         "nome": "MARCILIO ADELINO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355043090772808",
//         "imei2": "",
//         "modelo": "GALAXY A 8"
//     },
//     {
//         "nome": "JOSE GOMES FARIAS FILHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351880091971655",
//         "imei2": "",
//         "modelo": "MOTO G 6"
//     },
//     {
//         "nome": "AURILENE DE CASTRO",
//         "cidade": "RONDÔNIA",
//         "estado": "RO",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "JADSON JOSE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861267064192324",
//         "imei2": "",
//         "modelo": "XIAOMI 12 LIFE"
//     },
//     {
//         "nome": "MICHELE FRANÇOISE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358443608517637",
//         "imei2": "",
//         "modelo": "SANSUNG A 34"
//     },
//     {
//         "nome": "ALMIR BEZERRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866051060309347",
//         "imei2": "",
//         "modelo": "XIOMI HYPER OS"
//     },
//     {
//         "nome": "JOSE SOARES",
//         "cidade": "IGARASSU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "358302236374813",
//         "imei2": "",
//         "modelo": "GALAXY A03"
//     },
//     {
//         "nome": "SUELY VICENTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354187778163318",
//         "imei2": "",
//         "modelo": "MOTO E 13"
//     },
//     {
//         "nome": "HERICA MENEZES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353171120400942",
//         "imei2": "",
//         "modelo": "galaxy a14"
//     },
//     {
//         "nome": "FERNANDO LUCIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354881108036976",
//         "imei2": "",
//         "modelo": "SANSUNG A30"
//     },
//     {
//         "nome": "LUCIA FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353505451183827",
//         "imei2": "",
//         "modelo": "iphone 11"
//     },
//     {
//         "nome": "MANOELA LEITE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350056838701967",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "ANDREZZA MARIA RAMOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353267565542527",
//         "imei2": "",
//         "modelo": "iphone 14"
//     },
//     {
//         "nome": "EDVALDO DE FRANÇA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "357651714556155",
//         "imei2": "",
//         "modelo": "GALAXY A13"
//     },
//     {
//         "nome": "LUCIA HELENA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357971770622950",
//         "imei2": "",
//         "modelo": "TWIST 5"
//     },
//     {
//         "nome": "JOAO JOSE DE MELO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "3519989278872907",
//         "imei2": "",
//         "modelo": "GALAXY A03"
//     },
//     {
//         "nome": "JOAO JOSE DE MELO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "358299388216869",
//         "imei2": "",
//         "modelo": "GALAXY A02"
//     },
//     {
//         "nome": "EVANDRO MAIA DE ALMEIDA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353448663990392",
//         "imei2": "",
//         "modelo": "MOTO G 32"
//     },
//     {
//         "nome": "KETILI MARIA",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357651718382616",
//         "imei2": "",
//         "modelo": "GALAXY A13"
//     },
//     {
//         "nome": "SHEYLLA KAYLANNE",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "359104089832726",
//         "imei2": "",
//         "modelo": "SANSUNG J7 PRIME"
//     },
//     {
//         "nome": "DENISE DE ALMEIDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "863160062133804",
//         "imei2": "",
//         "modelo": "XIAOMI 10"
//     },
//     {
//         "nome": "MARIA IRENEIDE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "353037555953731",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "FEPILE RIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350496309408496",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "LEONARDO MONTINI",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "351109798750950",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "LUIZ FELIPE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353037555953731",
//         "imei2": "",
//         "modelo": "REDMI 12"
//     },
//     {
//         "nome": "KLEA SANTANA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355604124256637",
//         "imei2": "",
//         "modelo": "MOTO G 24"
//     },
//     {
//         "nome": "FRANÇOÁ PERREIRA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350877076817979",
//         "imei2": "",
//         "modelo": "MOTO G 06"
//     },
//     {
//         "nome": "JACSON ANTONIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355015101101128",
//         "imei2": "",
//         "modelo": "SANSUNG SI 06"
//     },
//     {
//         "nome": "RAIZA HELENE",
//         "cidade": "JOÃO PESSOA",
//         "estado": "PB",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351447854994942",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "THAYSA BARBOSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866271060531217",
//         "imei2": "",
//         "modelo": "REALME C53"
//     },
//     {
//         "nome": "IVONEIDE FREITE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350226903778576",
//         "imei2": "",
//         "modelo": "MOTO E 20"
//     },
//     {
//         "nome": "JULIA DOS SANTOS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350003442621231",
//         "imei2": "",
//         "modelo": "SANSUNG A 14"
//     },
//     {
//         "nome": "MILENA VICTORIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357291126407513",
//         "imei2": "",
//         "modelo": "JG K52"
//     },
//     {
//         "nome": "CARLOS ANTONIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354547678346273",
//         "imei2": "",
//         "modelo": "MOTO G 42"
//     },
//     {
//         "nome": "ANTONIO PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "3575567913392376",
//         "imei2": "",
//         "modelo": "GALAXY A 25"
//     },
//     {
//         "nome": "ALEXANDRE JORGE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355896815011533",
//         "imei2": "",
//         "modelo": "MOTO G 04"
//     },
//     {
//         "nome": "MAURICEIA DE PAULA ALENCAR",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352467926777249",
//         "imei2": "",
//         "modelo": "GALAXY A15"
//     },
//     {
//         "nome": "FREDERICO AGUIAR",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354103135923757",
//         "imei2": "",
//         "modelo": "S22"
//     },
//     {
//         "nome": "IRLANE RIBEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359368231121151",
//         "imei2": "",
//         "modelo": "IPHONE 15 PRO MAX"
//     },
//     {
//         "nome": "EVERALDO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351798812119844",
//         "imei2": "",
//         "modelo": "A22"
//     },
//     {
//         "nome": "ALEF SANTOS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "86130067553168",
//         "imei2": "",
//         "modelo": "POCO X 5 PRO"
//     },
//     {
//         "nome": "ADMILSON SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356130860439970",
//         "imei2": "",
//         "modelo": "A55"
//     },
//     {
//         "nome": "PLÁCIDO BEZERRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358302230751693",
//         "imei2": "",
//         "modelo": "A02"
//     },
//     {
//         "nome": "GABRIEL TEIXEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "865932053056527",
//         "imei2": "",
//         "modelo": "XIAMI MI 11"
//     },
//     {
//         "nome": "VICTÓRIA CABRAL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "351331721523946",
//         "imei2": "",
//         "modelo": "S 21 FE"
//     },
//     {
//         "nome": "TELMIR JOSE DOS SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357372678751803",
//         "imei2": "",
//         "modelo": "SAMSUNG A54"
//     },
//     {
//         "nome": "ALEXANDRE RAMOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO INCOMPLETO",
//         "nascimento": "",
//         "imei1": "355824551609179",
//         "imei2": "",
//         "modelo": "GALAXY A15"
//     },
//     {
//         "nome": "LAURYANNE SANTOS",
//         "cidade": "CARUARU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354440897736864",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO MAX"
//     },
//     {
//         "nome": "JORGE NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354737335126776",
//         "imei2": "",
//         "modelo": "GALAXY S24"
//     },
//     {
//         "nome": "DENIS REIS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "JOSÉ DO ESPÍRITO SANTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "358287629287823",
//         "imei2": "",
//         "modelo": "GALAXY A 05"
//     },
//     {
//         "nome": "JOÃO DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866380061828223",
//         "imei2": "",
//         "modelo": "REDMI 12 S"
//     },
//     {
//         "nome": "ADRIANO DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352326298839450",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "FRANCISCO JÚNIOR",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "POCO M5S"
//     },
//     {
//         "nome": "EDIELK COSTA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "REDMI 13"
//     },
//     {
//         "nome": "FLÁVIO RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353620110075981",
//         "imei2": "",
//         "modelo": "MOTO ONE FUSION"
//     },
//     {
//         "nome": "VERA LÚCIA DE VASCONCELOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354251622932456",
//         "imei2": "",
//         "modelo": "MOTO EDGE 30 NEO"
//     },
//     {
//         "nome": "JOÃO FÁBIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351331721011660",
//         "imei2": "",
//         "modelo": "S21 FE"
//     },
//     {
//         "nome": "LIGIA BATISTA ACCIOLY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359351340072804",
//         "imei2": "",
//         "modelo": "S23 FE"
//     },
//     {
//         "nome": "GUSTAVO BATISTA MAZZAC",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356958139565989",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "ITALO FERNANDO DA SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357275791104216",
//         "imei2": "",
//         "modelo": "IPHONE 15 PRO MAX"
//     },
//     {
//         "nome": "IVYNNY OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "357170858296387",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO MAX"
//     },
//     {
//         "nome": "ANA KARINA DE LIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355128637431552",
//         "imei2": "",
//         "modelo": "GALAXY M32"
//     },
//     {
//         "nome": "FERNANDO LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353448660786470",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "ANA GONÇALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355883611356510",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "MARIA GONÇALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352012834170168",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "SILVIO ROMERO COSTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "DOUTORADO",
//         "nascimento": "",
//         "imei1": "355293210363471",
//         "imei2": "",
//         "modelo": "S24"
//     },
//     {
//         "nome": "ARISTOMAR ALMEIDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35470211000098004",
//         "imei2": "",
//         "modelo": "SA71"
//     },
//     {
//         "nome": "VICTOR COLL",
//         "cidade": "RIO DE JANEIRO",
//         "estado": "RJ",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356544399019436",
//         "imei2": "",
//         "modelo": "SA54"
//     },
//     {
//         "nome": "GRAÇA BRAGANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359056811065407",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO MAX"
//     },
//     {
//         "nome": "JOSE RICARDO DANTAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353665906652188",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO MAX"
//     },
//     {
//         "nome": "ARMANDO ARCANJO FRID",
//         "cidade": "RIO DE JANEIRO",
//         "estado": "RJ",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358389470013686",
//         "imei2": "",
//         "modelo": "GALAXY S23"
//     },
//     {
//         "nome": "LUCIANA PARENTER",
//         "cidade": "RIO DE JANEIRO",
//         "estado": "RJ",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356501109176898",
//         "imei2": "",
//         "modelo": "IPHONE SE"
//     },
//     {
//         "nome": "JOAO VICTTOR ALTAMIR",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358397764880421",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "MARIA SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "86786609197123",
//         "imei2": "",
//         "modelo": "REDMI 12"
//     },
//     {
//         "nome": "JACKSON ANTONIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353054109768192",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "SELMA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351932264746255",
//         "imei2": "",
//         "modelo": "MOTO G53"
//     },
//     {
//         "nome": "VALMERISTON COSTA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "861055062862562",
//         "imei2": "",
//         "modelo": "REDMI NOTE 12"
//     },
//     {
//         "nome": "WILK MIRANDA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "868103055921327",
//         "imei2": "",
//         "modelo": "REDMI 11 PRO"
//     },
//     {
//         "nome": "NORAH NEVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355119090629055",
//         "imei2": "",
//         "modelo": "GALAXY A8"
//     },
//     {
//         "nome": "JOSE CARLOS LOUREÇO DA CONCEIÇÃO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "352997101631001",
//         "imei2": "",
//         "modelo": "SM J610G"
//     },
//     {
//         "nome": "MARISTELA CAVALCANTI",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351932266628618",
//         "imei2": "",
//         "modelo": "MBG53"
//     },
//     {
//         "nome": "RUBIA CAMPELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "MESTRADO",
//         "nascimento": "",
//         "imei1": "351057069537160",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "MILLENA RAISSA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356037847309475",
//         "imei2": "",
//         "modelo": "IPHONE 12 PRO"
//     },
//     {
//         "nome": "KATIA LIMA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353042535584408",
//         "imei2": "",
//         "modelo": "GALAXY S20"
//     },
//     {
//         "nome": "JOSÉ FERNANDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352081309043911",
//         "imei2": "",
//         "modelo": "GALAXY A03"
//     },
//     {
//         "nome": "GABRIEL SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR EM ANDAMENTO",
//         "nascimento": "",
//         "imei1": "351572592464187",
//         "imei2": "",
//         "modelo": "IPHONE 10 PRO"
//     },
//     {
//         "nome": "WILDIVAM SANTANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR EM ANDAMENTO",
//         "nascimento": "",
//         "imei1": "866789073595796",
//         "imei2": "",
//         "modelo": "X6A PLUS"
//     },
//     {
//         "nome": "MARINALVA ALEXANDRE DE LUCENA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "3563806936866475",
//         "imei2": "",
//         "modelo": "TECNO BG6"
//     },
//     {
//         "nome": "TALITA MOURA R DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356737681730484",
//         "imei2": "",
//         "modelo": "IPHONE 15PRO"
//     },
//     {
//         "nome": "EMMECI SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "863742053022722",
//         "imei2": "",
//         "modelo": "REDMI NOTE10"
//     },
//     {
//         "nome": "BRUNNA VANESSA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354832099601328",
//         "imei2": "",
//         "modelo": "IPHONE 8 PLUS"
//     },
//     {
//         "nome": "DARLYSON ROBERTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354003104554221",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "RENATA FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359167815799931",
//         "imei2": "",
//         "modelo": "MOTO G34"
//     },
//     {
//         "nome": "CARLOS SILVA",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354974387906777",
//         "imei2": "",
//         "modelo": "GALAXY A05"
//     },
//     {
//         "nome": "FRANCISCA LOPES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353327102079662",
//         "imei2": "",
//         "modelo": "GALAXY J6T"
//     },
//     {
//         "nome": "ROSANA SOARES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354957939839299",
//         "imei2": "",
//         "modelo": "MOTO G20"
//     },
//     {
//         "nome": "SIMONE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "3508770777829144",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "MARIA SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "359209090874466",
//         "imei2": "",
//         "modelo": "S J8"
//     },
//     {
//         "nome": "EDMILA LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "351007490430154",
//         "imei2": "",
//         "modelo": "ARMOR 22"
//     },
//     {
//         "nome": "ANEKELY DE MOURA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359167813795154",
//         "imei2": "",
//         "modelo": "MOTO G 34"
//     },
//     {
//         "nome": "CLAUDIO NASCIMENTO",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352537705594211",
//         "imei2": "",
//         "modelo": "MOTO G20"
//     },
//     {
//         "nome": "PAULO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350596813461095",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "ELEN LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356114093347531",
//         "imei2": "",
//         "modelo": "IPHONE 8 PLUS"
//     },
//     {
//         "nome": "CARINA SANTOS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "862574066592081",
//         "imei2": "",
//         "modelo": "GALAXY NOTE 13"
//     },
//     {
//         "nome": "EDVÂNIA OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO G7 PLUS"
//     },
//     {
//         "nome": "ELIAS EDUARDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350019046404840",
//         "imei2": "",
//         "modelo": "IPHONE 13 PRO MAX"
//     },
//     {
//         "nome": "CATARINA LEITE",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "868369060266822",
//         "imei2": "",
//         "modelo": "REDMI 13"
//     },
//     {
//         "nome": "CATARINA LEITE",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357233109314588",
//         "imei2": "",
//         "modelo": "MOTO ONE MACRO"
//     },
//     {
//         "nome": "ROSINEIDE REGINA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353062103297977",
//         "imei2": "",
//         "modelo": "IPHONE X"
//     },
//     {
//         "nome": "SARA OLIVEIRA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "EDUARDO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359925994854417",
//         "imei2": "",
//         "modelo": "MOTO E7"
//     },
//     {
//         "nome": "CLAUDILENE FELISBERTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO EDGE 40 NEO"
//     },
//     {
//         "nome": "MARIA APARECIDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "MAURICEA BEZERRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351683331705671",
//         "imei2": "",
//         "modelo": "MOTO E13"
//     },
//     {
//         "nome": "ROSINEIDE PINHEIRO",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358239541065050",
//         "imei2": "",
//         "modelo": "MOTO E 32"
//     },
//     {
//         "nome": "LEONARDO ALEXANDRE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "865511683690003",
//         "imei2": "",
//         "modelo": "MOTO G4"
//     },
//     {
//         "nome": "EDVALDO ALMEIDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "REDMI A3"
//     },
//     {
//         "nome": "LUANA CARLA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351808470994733",
//         "imei2": "",
//         "modelo": "MOTO G34"
//     },
//     {
//         "nome": "ROSINEIDE SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359993320992772",
//         "imei2": "",
//         "modelo": "MOTO EDGE 20"
//     },
//     {
//         "nome": "DANIELA ARAUJO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "ROBSON LUIZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350596813604355",
//         "imei2": "",
//         "modelo": "MOTO G53"
//     },
//     {
//         "nome": "DIANE LEÃO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "354405108988067",
//         "imei2": "",
//         "modelo": "GALAXY J4"
//     },
//     {
//         "nome": "YÊDA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354624107877291",
//         "imei2": "",
//         "modelo": "GALAXY S10"
//     },
//     {
//         "nome": "MURILO SALVIANO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "866646062084903",
//         "imei2": "",
//         "modelo": "REDMI 12 PRO"
//     },
//     {
//         "nome": "SILVANA OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359209098029527",
//         "imei2": "",
//         "modelo": "GALAXY J8"
//     },
//     {
//         "nome": "LAUDECY SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350603381135448",
//         "imei2": "",
//         "modelo": "GALAXY A53"
//     },
//     {
//         "nome": "ANDRE BARROS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356544396443019",
//         "imei2": "",
//         "modelo": "GALAXY A54"
//     },
//     {
//         "nome": "SIMONE AMORIM",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352617326308876",
//         "imei2": "",
//         "modelo": "MOTO G10"
//     },
//     {
//         "nome": "MÉRCIA ALMEIDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355708339772930",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "TAMIRIS SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "KARLA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358538777977221",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "ELISA SOARES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352772258930781",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO"
//     },
//     {
//         "nome": "PUBLIUS LENTULUS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "2",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "JOELMY JOSE",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351798812122129",
//         "imei2": "",
//         "modelo": "GALAXYA22"
//     },
//     {
//         "nome": "NATVA RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "868026060257595",
//         "imei2": "",
//         "modelo": "C3"
//     },
//     {
//         "nome": "MARIA BENITA RODRIGUES",
//         "cidade": "MACEIÓ",
//         "estado": "AL",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "864031051199370",
//         "imei2": "",
//         "modelo": "REDMI 12 PRO"
//     },
//     {
//         "nome": "JESSICA SANTANA",
//         "cidade": "MACEIÓ",
//         "estado": "AL",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350252264382600",
//         "imei2": "",
//         "modelo": "CRHONESE"
//     },
//     {
//         "nome": "SILVÂNIA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351007066036831",
//         "imei2": "",
//         "modelo": "GALAXY A35"
//     },
//     {
//         "nome": "LETÍCIA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352676520115503",
//         "imei2": "",
//         "modelo": "IPHONE 15 POR MAX"
//     },
//     {
//         "nome": "ADILSON NOGUEIRA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354314902475562",
//         "imei2": "",
//         "modelo": "GALAXY A24"
//     },
//     {
//         "nome": "RICARDO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351234610773079",
//         "imei2": "",
//         "modelo": "MOTO G 34"
//     },
//     {
//         "nome": "DANIELA CARVALHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354680110669661",
//         "imei2": "",
//         "modelo": "GALAXY S20"
//     },
//     {
//         "nome": "ITALANEY SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352889211035399",
//         "imei2": "",
//         "modelo": "GALAXY A15"
//     },
//     {
//         "nome": "KARYLINE OLIVEIRA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359817430736102",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "JACINEIDE MENESCAL",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "351331725636272",
//         "imei2": "",
//         "modelo": "GALAXY S22 FE"
//     },
//     {
//         "nome": "ERIKA MILENA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356159115034294",
//         "imei2": "",
//         "modelo": "GALAXY A30"
//     },
//     {
//         "nome": "ANA VERONICA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351331721405672",
//         "imei2": "",
//         "modelo": "GALAXY"
//     },
//     {
//         "nome": "DOUGLAS BARBOSA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "869006064777086",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "MARIA CORDEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "NONE"
//     },
//     {
//         "nome": "ANA FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "NONE",
//         "imei2": "",
//         "modelo": "NONE"
//     },
//     {
//         "nome": "DIOGO MARCONI",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356722915020274",
//         "imei2": "",
//         "modelo": "NONE"
//     },
//     {
//         "nome": "GLEICY KELLY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358216481507358",
//         "imei2": "",
//         "modelo": "NONE"
//     },
//     {
//         "nome": "ERIKA MILENA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356159113034294",
//         "imei2": "",
//         "modelo": "GALAXY A35"
//     },
//     {
//         "nome": "ETIENE DE BRITO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357567915815531",
//         "imei2": "",
//         "modelo": "NONE"
//     },
//     {
//         "nome": "EMMANUEL DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "374711350504126",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "MÔNICA DO NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "867017056954908",
//         "imei2": "",
//         "modelo": "REDMI NOTE 9"
//     },
//     {
//         "nome": "JOAO VITOR",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35669708883765",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "ERALDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353884191929249",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "PAULO TELLES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354078664342498",
//         "imei2": "",
//         "modelo": "IPHONE 16"
//     },
//     {
//         "nome": "IGOR JOSÉ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "862281070887321",
//         "imei2": "",
//         "modelo": "REDMI NOTE 13"
//     },
//     {
//         "nome": "JOSEANE NUNES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359946571566695",
//         "imei2": "",
//         "modelo": "MOTO G60"
//     },
//     {
//         "nome": "SIMONE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353620111922512",
//         "imei2": "",
//         "modelo": "MOTO ONE FUSION"
//     },
//     {
//         "nome": "MARIZE LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353935593974447",
//         "imei2": "",
//         "modelo": "IPHONE 13 PLUS"
//     },
//     {
//         "nome": "GIZELMA OLLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356909119262931",
//         "imei2": "",
//         "modelo": "MOTO ONEVISION"
//     },
//     {
//         "nome": "EUDA RIBEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351486319566051",
//         "imei2": "",
//         "modelo": "IPHONE 13 PLUS"
//     },
//     {
//         "nome": "EDESIO NETO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "IPHONE 16 PRO"
//     },
//     {
//         "nome": "CLEIDE DE MELO",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353171123894562",
//         "imei2": "",
//         "modelo": "GALAXY A14"
//     },
//     {
//         "nome": "KÁTIA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354952836428189",
//         "imei2": "",
//         "modelo": "GALAXY S21 S"
//     },
//     {
//         "nome": "IVALDO SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351428310144363",
//         "imei2": "",
//         "modelo": "GALAXY S 22"
//     },
//     {
//         "nome": "MARCIO RICARDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355772261772037",
//         "imei2": "",
//         "modelo": "MOTO EDGE 20"
//     },
//     {
//         "nome": "JOSINALDO LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "REDMI NOTE 5"
//     },
//     {
//         "nome": "PAULO LÔBO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "ALYSON PARAISO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "KIRON GOMES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359598834607814",
//         "imei2": "",
//         "modelo": "MOTO G 24"
//     },
//     {
//         "nome": "PERACIO JUNIOR",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "GALAXY A22"
//     },
//     {
//         "nome": "TATIANA SILVA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL TÉCNICO",
//         "nascimento": "",
//         "imei1": "353975103273088",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "JESSE SILVA",
//         "cidade": "ABREU E LIMA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861500060134373",
//         "imei2": "",
//         "modelo": "redmi C53"
//     },
//     {
//         "nome": "GLEICE DE ARRUDA VIEIRA SANTANA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "FAUSTO DOWER",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "35132805618195",
//         "imei2": "",
//         "modelo": "MOTOROLA G82"
//     },
//     {
//         "nome": "ARNALDO LENDRO NASCIMENTO FILHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353171129052413",
//         "imei2": "",
//         "modelo": "GALAXY A07"
//     },
//     {
//         "nome": "LUIZ HENRIQUE LIMA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356904116719215",
//         "imei2": "",
//         "modelo": "MOTO G9 PLUS"
//     },
//     {
//         "nome": "ADELSON CARNEIRO COSTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357576781764152",
//         "imei2": "",
//         "modelo": "GALAXY A55"
//     },
//     {
//         "nome": "VALDEMAR SOARES YUAN",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "866129066375346",
//         "imei2": "",
//         "modelo": "XIAOMI POCO X6"
//     },
//     {
//         "nome": "EPFANIA MARIA BATISTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352177395245111",
//         "imei2": "",
//         "modelo": "GALAXY A13"
//     },
//     {
//         "nome": "JOÃO BATISTA DANTAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354673132479417",
//         "imei2": "",
//         "modelo": "MOTO G14"
//     },
//     {
//         "nome": "ALINDO CAVALCANTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355738554240719",
//         "imei2": "",
//         "modelo": "SANSUNG A30"
//     },
//     {
//         "nome": "FLORIVALDO LOURENÇO",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "355165988621415",
//         "imei2": "",
//         "modelo": "MOTO E22"
//     },
//     {
//         "nome": "ANDREZA KARLA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355707111627452",
//         "imei2": "",
//         "modelo": "GALAXY A 51"
//     },
//     {
//         "nome": "LEANDRO F VIEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "351399612751777",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "ALEXSANDRA ALENCAR",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355080411819496",
//         "imei2": "",
//         "modelo": "LG K22"
//     },
//     {
//         "nome": "ROSELANIA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352463778732853",
//         "imei2": "",
//         "modelo": "SAMSUNG A05"
//     },
//     {
//         "nome": "ABINAEL DIAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354173242040399",
//         "imei2": "",
//         "modelo": "SAMSUNG A15"
//     },
//     {
//         "nome": "ROBERVAL FRANCISCO DE AGUIAR",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351556612539274",
//         "imei2": "",
//         "modelo": "MOTO G24"
//     },
//     {
//         "nome": "JOSE RICARDO ARANHA",
//         "cidade": "JOÃO PESSOA",
//         "estado": "PB",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356485101899089",
//         "imei2": "",
//         "modelo": "IPHONE XR2020"
//     },
//     {
//         "nome": "JOAO PAULO LIMA",
//         "cidade": "BOM JARDIM",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "359986695681079",
//         "imei2": "",
//         "modelo": "MOTO G22"
//     },
//     {
//         "nome": "GIVANILDO OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354187771828339",
//         "imei2": "",
//         "modelo": "MOTO G13"
//     },
//     {
//         "nome": "ANANILDA DE SOUZA FIGUEREDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351583483434643",
//         "imei2": "",
//         "modelo": "GALAXY A23"
//     },
//     {
//         "nome": "DENILDA FIGUEREIDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355100981492332",
//         "imei2": "",
//         "modelo": "SAMSUNG A 32"
//     },
//     {
//         "nome": "JOSE EVERTON",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350118659733279",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "ROSANA MARIA DA MOTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354693116177662",
//         "imei2": "",
//         "modelo": "GALAXY A01"
//     },
//     {
//         "nome": "EPOMUCENO FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353568698594594",
//         "imei2": "",
//         "modelo": "SAMSUNG A20"
//     },
//     {
//         "nome": "MARLUCE BENICIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357268112868932",
//         "imei2": "",
//         "modelo": "GALAXY A25"
//     },
//     {
//         "nome": "THAIS VALERIA SILVA DE MELO",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353056100866925",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "ALESSANDRA PATRICIA SILVA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353967102840587",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "GILVANDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354188155230068",
//         "imei2": "",
//         "modelo": "GALAXY A04"
//     },
//     {
//         "nome": "MARCIA NASCIMENTO",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "862377076608065",
//         "imei2": "",
//         "modelo": "REDMI NOTE13"
//     },
//     {
//         "nome": "ELIANE ROSA DA SIVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "356491101922020",
//         "imei2": "",
//         "modelo": "IPHONE 5 PLUS"
//     },
//     {
//         "nome": "JACILEYNE DUARTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354933331488332",
//         "imei2": "",
//         "modelo": "MOTO G24"
//     },
//     {
//         "nome": "GABRIEL NEVES MACIEL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354494161571879",
//         "imei2": "",
//         "modelo": "SAMSUNG A055"
//     },
//     {
//         "nome": "ADENILZA PERPETUA",
//         "cidade": "BELÉM",
//         "estado": "PA",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "355530110275259",
//         "imei2": "",
//         "modelo": "MOTOG 9 PLAY"
//     },
//     {
//         "nome": "PATRICIA PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352917264012823",
//         "imei2": "",
//         "modelo": "IPHONE 15 PRO"
//     },
//     {
//         "nome": "LUCAS CABRAL",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861126054870630",
//         "imei2": "",
//         "modelo": "REDMI NOT 9 PRO"
//     },
//     {
//         "nome": "SWHIRLEY OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO G04 S"
//     },
//     {
//         "nome": "RENATO FERREIRA DA SILVA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "36351069502650765",
//         "imei2": "",
//         "modelo": "GALAXY M53"
//     },
//     {
//         "nome": "GILSON JOSE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356707184302479",
//         "imei2": "",
//         "modelo": "GALAXY A 12"
//     },
//     {
//         "nome": "MARIA DO SOCORRO DE SANTANA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352967354828661",
//         "imei2": "",
//         "modelo": "GALAXY A 13"
//     },
//     {
//         "nome": "JOSE CARLOS PORTELA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353171121358248",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "TATIANA CARLA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351328050704998",
//         "imei2": "",
//         "modelo": "MOTO G 82"
//     },
//     {
//         "nome": "ELIZABETH COUTINHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351004642763061",
//         "imei2": "",
//         "modelo": "SANSUNG A 14"
//     },
//     {
//         "nome": "ALBERTO MIGUEL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "868026060230279",
//         "imei2": "",
//         "modelo": "REALME C33"
//     },
//     {
//         "nome": "CARLOS ALBERTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "JOZIMAR PAIVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "359167813372053",
//         "imei2": "",
//         "modelo": "MOTO G 34"
//     },
//     {
//         "nome": "LEONARDO JOSE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "863720072566184",
//         "imei2": "",
//         "modelo": "REDMI NOT 13 PRO"
//     },
//     {
//         "nome": "MICHEL LIMA",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR EM ANDAMENTO",
//         "nascimento": "",
//         "imei1": "355612589312316",
//         "imei2": "",
//         "modelo": "MOTOG54"
//     },
//     {
//         "nome": "MONIK HOTZ",
//         "cidade": "CARUARU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "35801994782004",
//         "imei2": "",
//         "modelo": "IPHONE15"
//     },
//     {
//         "nome": "ELIDA DIAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863715068907129",
//         "imei2": "",
//         "modelo": "XIAOMI 13 LIGHT"
//     },
//     {
//         "nome": "ETIENE SANTANA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353037556071715",
//         "imei2": "",
//         "modelo": "MOTOG54"
//     },
//     {
//         "nome": "CARMEM ARAÚJO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352432982510579",
//         "imei2": "",
//         "modelo": "GALAXY A11"
//     },
//     {
//         "nome": "SANDRA FERREIRA DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351799222871214",
//         "imei2": "",
//         "modelo": "MOTO53 5G"
//     },
//     {
//         "nome": "LELIA CARLA LIRA VENACIO PINHEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359410827711076",
//         "imei2": "",
//         "modelo": "GALAXY A 12"
//     },
//     {
//         "nome": "VALDILENE AMORIM DA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351847545721788",
//         "imei2": "",
//         "modelo": "GALAXY A 14 5G"
//     },
//     {
//         "nome": "ANNA LUISA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356447107511399",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "KÁTIA CRISTINA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354494162184342",
//         "imei2": "",
//         "modelo": "SANSUNG GALAXY A05S"
//     },
//     {
//         "nome": "LUCAS BEZERRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358330276048039",
//         "imei2": "",
//         "modelo": "IPHONE14"
//     },
//     {
//         "nome": "NATALY MONTEBELLO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354974388906461",
//         "imei2": "",
//         "modelo": "GALAXY A 05"
//     },
//     {
//         "nome": "AMAURY VICENTE DA SILVA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351004641180382",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "LEANDRO GUERRA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354702113118981",
//         "imei2": "",
//         "modelo": "GALAXY A71"
//     },
//     {
//         "nome": "THIAGO LUIZ RODRIGUES DA ROCHA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "CURSO TÉCNICO",
//         "nascimento": "",
//         "imei1": "3513996121318197",
//         "imei2": "",
//         "modelo": "MOTOROLA G54 EDGE"
//     },
//     {
//         "nome": "AMANDA CARLA DE SOUZA COSTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356697211081618",
//         "imei2": "",
//         "modelo": "GALAXY A21 S"
//     },
//     {
//         "nome": "AMANDA CARLA DE SOUZA COSTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358543581387419",
//         "imei2": "",
//         "modelo": "SANSUNG A 21"
//     },
//     {
//         "nome": "LUCIA GOMINHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357621104306719",
//         "imei2": "",
//         "modelo": "GALAXY A20"
//     },
//     {
//         "nome": "NICOLE GOMES",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "865041044102208",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "ADAUTO FERRAZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356159110164369",
//         "imei2": "",
//         "modelo": "GALAXY A 31"
//     },
//     {
//         "nome": "ALEXANDRO FRANÇA",
//         "cidade": "CABO DE SANTO AGOSTINHO",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351808471471517",
//         "imei2": "",
//         "modelo": "MOTO G 34 5G"
//     },
//     {
//         "nome": "IVANA LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "GALAXY A23"
//     },
//     {
//         "nome": "MÔNICA SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "ADILSON SILVA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354154104210718",
//         "imei2": "",
//         "modelo": "MOTO ONE VISION"
//     },
//     {
//         "nome": "MARIA JUSTA TENÓRIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351974979001337",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "DJAÍLTON FREITAS",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351339865306952",
//         "imei2": "",
//         "modelo": "GALAXY S 24 ULTRA"
//     },
//     {
//         "nome": "ELIEZER JÚNIOR",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356544399350658",
//         "imei2": "",
//         "modelo": "GALAXY A54"
//     },
//     {
//         "nome": "ADREIA BERNARDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351520703050320",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "MARIA GORETE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350274356593829",
//         "imei2": "",
//         "modelo": "GALAXY A 22"
//     },
//     {
//         "nome": "STHEPHANIE LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351069500129416",
//         "imei2": "",
//         "modelo": "GALAXY E 53"
//     },
//     {
//         "nome": "EGÍPCIA CRUZ",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "864799048328043",
//         "imei2": "",
//         "modelo": "REDMI 9I"
//     },
//     {
//         "nome": "EDILENE COUTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354853096959196",
//         "imei2": "",
//         "modelo": "IPHONE 7"
//     },
//     {
//         "nome": "DAVI SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351084399593689",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "MIRELLA RAMOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357980449447541",
//         "imei2": "",
//         "modelo": "GALXY A 15"
//     },
//     {
//         "nome": "RAFAEL COSTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350038441871874",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "FABIANNE FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356450525659840",
//         "imei2": "",
//         "modelo": "SANSUNG A 14"
//     },
//     {
//         "nome": "AURINEIDE MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "JARSON ELIAS",
//         "cidade": "MACEIÓ",
//         "estado": "AL",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "866672065612524",
//         "imei2": "",
//         "modelo": "REDMI 12"
//     },
//     {
//         "nome": "ANAMAURA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "868983076065844",
//         "imei2": "",
//         "modelo": "XIAOMI HYPER PRO"
//     },
//     {
//         "nome": "JULIANA AZEVEDO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "RUDINALDO CARNEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351537275323513",
//         "imei2": "",
//         "modelo": "SANSUNG A35"
//     },
//     {
//         "nome": "MARIA GORETTE",
//         "cidade": "BELO HORIZONTE",
//         "estado": "MG",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353676113524573",
//         "imei2": "",
//         "modelo": "SANSUNG NOT10"
//     },
//     {
//         "nome": "MARIANA RODRIGUES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353685815445276",
//         "imei2": "",
//         "modelo": "MOTO EDGE"
//     },
//     {
//         "nome": "JACIARA MARIA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353494817101072",
//         "imei2": "",
//         "modelo": "MOTO G"
//     },
//     {
//         "nome": "ALINE MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359978122467305",
//         "imei2": "",
//         "modelo": "IPHONE 13 PROMAX"
//     },
//     {
//         "nome": "BRENNDA KATRELL",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353238105020969",
//         "imei2": "",
//         "modelo": "IPHONE 11 PRO"
//     },
//     {
//         "nome": "JOSE ALVES",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353123304704292",
//         "imei2": "",
//         "modelo": "MOTO G 41"
//     },
//     {
//         "nome": "GEOVANA DE ASSIS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356560973041935",
//         "imei2": "",
//         "modelo": "MOTO G 60"
//     },
//     {
//         "nome": "MARIA DA CONCEIÇÃO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355881661268452",
//         "imei2": "",
//         "modelo": "SANSUNG M 51"
//     },
//     {
//         "nome": "ALEXSANDRA GOMES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350321535541219",
//         "imei2": "",
//         "modelo": "IPHONE 14 PROMAX"
//     },
//     {
//         "nome": "ANDRE FELIPE",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861520071909928",
//         "imei2": "",
//         "modelo": "REDMI NOT 13"
//     },
//     {
//         "nome": "JOSENILDO DA SILVA",
//         "cidade": "SÃO PAULO",
//         "estado": "SP",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "SANDRO RIBEIRO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355896814197473",
//         "imei2": "",
//         "modelo": "Moto g04"
//     },
//     {
//         "nome": "ANDREZA CARMO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "866400055065549",
//         "imei2": "",
//         "modelo": "XIAOMI NOT9 PRO"
//     },
//     {
//         "nome": "MARIA ARIELLY",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357799153739350",
//         "imei2": "",
//         "modelo": "SANSUNG A 54"
//     },
//     {
//         "nome": "CAUÃ REYMOND BRITO",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351371811062546",
//         "imei2": "",
//         "modelo": "GALAXY S23"
//     },
//     {
//         "nome": "THIAGO HENRIQUE",
//         "cidade": "SANTA CRUZ DO CAPIBARIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "869264063352042",
//         "imei2": "",
//         "modelo": "REDMI NOT 11"
//     },
//     {
//         "nome": "LUCAS JOSE GOMES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357980440954032",
//         "imei2": "",
//         "modelo": "SANSUNG A 15"
//     },
//     {
//         "nome": "LUANA BARRETO DE ALMEIDA",
//         "cidade": "JOÃO PESSOA",
//         "estado": "PB",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351696727216764",
//         "imei2": "",
//         "modelo": "IPHONE 11 PRO"
//     },
//     {
//         "nome": "MARCELA ALMEIDA",
//         "cidade": "JOÃO PESSOA",
//         "estado": "PB",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352827113303424",
//         "imei2": "",
//         "modelo": "IPHONE 11 PRO"
//     },
//     {
//         "nome": "MARIA CLARA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352897117202005",
//         "imei2": "",
//         "modelo": "IPHONE 11 PRO"
//     },
//     {
//         "nome": "CAUÃ HENRIQUE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352918110497853",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "EDILEUSA CANDIDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "358615317014838",
//         "imei2": "",
//         "modelo": "SANSUNG S23"
//     },
//     {
//         "nome": "JOSELITA MORAES",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357992875240779",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "SUZANA LUZIEE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351057061968421",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "RENATA MIRANDA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "3501596813918777",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "JOÃO FRANSCISCO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353676113398002",
//         "imei2": "",
//         "modelo": "SANSUNG S10"
//     },
//     {
//         "nome": "EMANUELLY PAES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354680110823698",
//         "imei2": "",
//         "modelo": "SANSUNG S20"
//     },
//     {
//         "nome": "EUFRASIO GOMES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "3572681178611114",
//         "imei2": "",
//         "modelo": "GALAXY A20"
//     },
//     {
//         "nome": "ANA MARIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351989276449260",
//         "imei2": "",
//         "modelo": "GALAXY A 3"
//     },
//     {
//         "nome": "REGINA FREITAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352195107715031",
//         "imei2": "",
//         "modelo": "MOTO G7"
//     },
//     {
//         "nome": "JOANA DARC",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353037556194699",
//         "imei2": "",
//         "modelo": "MOTO G54"
//     },
//     {
//         "nome": "LUANA DE LIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353076101688045",
//         "imei2": "",
//         "modelo": "IPHONE 7"
//     },
//     {
//         "nome": "DOUNG SOOK",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351004646251881",
//         "imei2": "",
//         "modelo": "SANSUNG A14"
//     },
//     {
//         "nome": "ANDRÉ SOARES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "862157061711383",
//         "imei2": "",
//         "modelo": "REDMI NOT 13"
//     },
//     {
//         "nome": "RILMA CAVALCANTE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "861440067721502",
//         "imei2": "",
//         "modelo": "REDMI"
//     },
//     {
//         "nome": "RAFAELA ALESSANDRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351751195194181",
//         "imei2": "",
//         "modelo": "S21 PLUS"
//     },
//     {
//         "nome": "JACIARA BORGES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "A13"
//     },
//     {
//         "nome": "CAMILA DE FATIMA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35142831086030001",
//         "imei2": "",
//         "modelo": "SANSUNG S23"
//     },
//     {
//         "nome": "MARINA ISABELA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35844360945278401",
//         "imei2": "",
//         "modelo": "A 34"
//     },
//     {
//         "nome": "ANTONIO JORGE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35133986562291101",
//         "imei2": "",
//         "modelo": "S24"
//     },
//     {
//         "nome": "DÁRIA FERREIRA",
//         "cidade": "RIO DE JANEIRO",
//         "estado": "RJ",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863090065026502658",
//         "imei2": "",
//         "modelo": "REDMI 11"
//     },
//     {
//         "nome": "MARIO DO SOCORRO",
//         "cidade": "MACEIÓ",
//         "estado": "AL",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "35615011475662301",
//         "imei2": "",
//         "modelo": "A31"
//     },
//     {
//         "nome": "ROZILDA OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "868244075503164",
//         "imei2": "",
//         "modelo": "XIAOMI POCO"
//     },
//     {
//         "nome": "TARCIANA BANDEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352887112246131",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "SHIRLEY LOPES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353494815235336",
//         "imei2": "",
//         "modelo": "MOTOROLO"
//     },
//     {
//         "nome": "AMANDA FREITAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350599271711100",
//         "imei2": "",
//         "modelo": "GALAXY S23"
//     },
//     {
//         "nome": "KEILA DE SOUZA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357917875652699",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "MARIA NATALINA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353765371469876",
//         "imei2": "",
//         "modelo": "A12"
//     },
//     {
//         "nome": "NAYARA JOSIMARA",
//         "cidade": "BRASILIA",
//         "estado": "DF",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "356417998847335",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "MARCOS BEZERRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352790344891593",
//         "imei2": "",
//         "modelo": "MOTO G 53"
//     },
//     {
//         "nome": "JESSIKELY PEREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351328053284279",
//         "imei2": "",
//         "modelo": "MOTO G 82"
//     },
//     {
//         "nome": "OSIEL DE JESUS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "868624070163751",
//         "imei2": "",
//         "modelo": "REALME 12"
//     },
//     {
//         "nome": "FABIO HENRIQUE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355191348836469",
//         "imei2": "",
//         "modelo": "TECNO"
//     },
//     {
//         "nome": "EDVANIO TENORIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "353685814029410",
//         "imei2": "",
//         "modelo": "MOTO G 84"
//     },
//     {
//         "nome": "LUCAS VINICIUS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "354013955933534",
//         "imei2": "",
//         "modelo": "TCL 40 SE"
//     },
//     {
//         "nome": "JOSEFA TRAVASSOS",
//         "cidade": "PETROLINA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "356145621504755",
//         "imei2": "",
//         "modelo": "MOTO G 73"
//     },
//     {
//         "nome": "LUCIENE ALEIXO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357651712331866",
//         "imei2": "",
//         "modelo": "A13"
//     },
//     {
//         "nome": "MARCOS ARAUJO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354950993876315",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "JOSIMARY BORGES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356659960158890",
//         "imei2": "",
//         "modelo": "ZFLIP 6"
//     },
//     {
//         "nome": "ADILSON FELIPE",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355317515477114",
//         "imei2": "",
//         "modelo": "S 21 PLUS"
//     },
//     {
//         "nome": "MARCELE GUEDES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355846128956510",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "ITAMARA FRANKLIN",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351083739689199",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "ANA CLAUDIA GOMES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357369092003621",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "LEONICE GOMES",
//         "cidade": "SURUBIM",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353651143671710",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "JOÃO CUMARU",
//         "cidade": "GARANHUNS",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "860220055831534",
//         "imei2": "",
//         "modelo": "POCO X"
//     },
//     {
//         "nome": "JOSÉ FURTADO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350003444431795",
//         "imei2": "",
//         "modelo": "SANSUNG A 14"
//     },
//     {
//         "nome": "NALVANEIDE SILVA",
//         "cidade": "IGARASSU",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355881661029003",
//         "imei2": "",
//         "modelo": "SANSUNG M51"
//     },
//     {
//         "nome": "GRAÇA LINS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355554415189213",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "MARIA BEATRIZ LEAL",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356964462742344",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "AURICELIA DIAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357368098573868",
//         "imei2": "",
//         "modelo": "IPHONE 15"
//     },
//     {
//         "nome": "MARIANA HORA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351974979206993",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "VERANI SOL",
//         "cidade": "TEREZINA",
//         "estado": "PI",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "355597820996300",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "NELSON NETO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350841439197560",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "JOSECLEIDE MORAES",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358546119750644",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "GERLANI DAMATA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "353524723183077",
//         "imei2": "",
//         "modelo": "MOTO R 7"
//     },
//     {
//         "nome": "SUELI NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "863281061678084",
//         "imei2": "",
//         "modelo": "REDMI PRO PLUS"
//     },
//     {
//         "nome": "RICARDO FIGUEREDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355875772893372",
//         "imei2": "",
//         "modelo": "MOTO G24"
//     },
//     {
//         "nome": "MARIA DAS DORES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350877076115010",
//         "imei2": "",
//         "modelo": "MOTO G 22"
//     },
//     {
//         "nome": "KLEYVERSON BERNARDO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "IPHONE 15 PRO MAX"
//     },
//     {
//         "nome": "JOSÉ SILVA",
//         "cidade": "SÃO LOURENÇO DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350175611056728",
//         "imei2": "",
//         "modelo": "GALAXY S 23 ULTRA"
//     },
//     {
//         "nome": "RICARDO BEZERRA",
//         "cidade": "PESQUEIRA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351428311638777",
//         "imei2": "",
//         "modelo": "GALAXY S 23"
//     },
//     {
//         "nome": "CLARICE SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359710397421612",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "CELSO FERREIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "354188151712176",
//         "imei2": "",
//         "modelo": "GALAXY S"
//     },
//     {
//         "nome": "GIOVANA GUARDIA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353501806899100",
//         "imei2": "",
//         "modelo": "IPHONE 14 PRO"
//     },
//     {
//         "nome": "",
//         "cidade": "NÃO INFORMADA",
//         "estado": "",
//         "escolaridade": "NÃO INFORMADA",
//         "nascimento": "",
//         "imei1": "352810150727168",
//         "imei2": "",
//         "modelo": "IPHONE SE2020"
//     },
//     {
//         "nome": "LORRANE SOUSA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353069109894897",
//         "imei2": "",
//         "modelo": "IPHONE XR"
//     },
//     {
//         "nome": "MARIA FERNANDA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "864336060721910",
//         "imei2": "",
//         "modelo": "A57S"
//     },
//     {
//         "nome": "ANA LUIZA",
//         "cidade": "CONTAGEM",
//         "estado": "MG",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351331722238296",
//         "imei2": "",
//         "modelo": "GALAXY S 21FE"
//     },
//     {
//         "nome": "KAYNAN FERREIRA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350175610089894",
//         "imei2": "",
//         "modelo": "GALAXY S 23 ULTRA"
//     },
//     {
//         "nome": "YASLA FRANÇA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359167816204790",
//         "imei2": "",
//         "modelo": "MOTE G 34"
//     },
//     {
//         "nome": "KATTARINY MELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355497360718125",
//         "imei2": "",
//         "modelo": "MOTO G 54"
//     },
//     {
//         "nome": "TIAGO NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358466361859532",
//         "imei2": "",
//         "modelo": "MOTO EDGE 30"
//     },
//     {
//         "nome": "SILVIO CANHA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "357504274710797",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "LETÍCIA MANTA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358546119607851",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "ALISSON LIMA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "382937908597807",
//         "imei2": "",
//         "modelo": "IPHONE 14"
//     },
//     {
//         "nome": "JHONATAN RODRIGUES",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "350676591531523",
//         "imei2": "",
//         "modelo": "GALAXY A 14"
//     },
//     {
//         "nome": "MARCELLY BRENDA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352959524037018",
//         "imei2": "",
//         "modelo": "IPHONE 13"
//     },
//     {
//         "nome": "LUZINALVA DE OLIVEIRA",
//         "cidade": "RIO DE JANEIRO",
//         "estado": "RJ",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "3592968414644994",
//         "imei2": "",
//         "modelo": "MOTO E22"
//     },
//     {
//         "nome": "KENNYA MACEDO",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "355050113703041",
//         "imei2": "",
//         "modelo": "MOTO E7"
//     },
//     {
//         "nome": "EVA MOTA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "CÁSSIA ALVES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351328053068391",
//         "imei2": "",
//         "modelo": "MOTO G82"
//     },
//     {
//         "nome": "ANNA BEATRIZ ARRUDA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354807374261883",
//         "imei2": "",
//         "modelo": "IPHONE"
//     },
//     {
//         "nome": "ANNA CATARINA ASSIS",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352899117038413",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "WILLIANE FELIX",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356430106361230",
//         "imei2": "",
//         "modelo": "IPHONE XS"
//     },
//     {
//         "nome": "ANDERSON ALEXANDRE",
//         "cidade": "NAZARÉ DA MATA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "ESTEFFANY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353011092015676",
//         "imei2": "",
//         "modelo": "IPHONE 8 PLUS"
//     },
//     {
//         "nome": "DIEGA CARVALHO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357333093420721",
//         "imei2": "",
//         "modelo": "IPHONE XE"
//     },
//     {
//         "nome": "OLGA ALCANTARA",
//         "cidade": "SANTA CRUZ DO CAPIBARIBE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353240104477620",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "FERNANDA BARBOSA",
//         "cidade": "AFOGADOS DA INGAZEIRA",
//         "estado": "",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "357504279770473",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "LARISSA LYRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351793399472948",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "WALTER SILVA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356544396963099",
//         "imei2": "",
//         "modelo": "GALAXY A 54"
//     },
//     {
//         "nome": "VANESSA FRANÇA",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "GALAXY A 55"
//     },
//     {
//         "nome": "Jose evertom",
//         "cidade": "ESCADA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351335417271199",
//         "imei2": "",
//         "modelo": "iphone 15"
//     },
//     {
//         "nome": "Tarcila cabral",
//         "cidade": "JABOATÃO DOS GUARARAPES",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350676594006176",
//         "imei2": "",
//         "modelo": "galaxy a14"
//     },
//     {
//         "nome": "BRUNO DA SILVA",
//         "cidade": "TORITAMA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "8697933049694128",
//         "imei2": "",
//         "modelo": "REDMI 11"
//     },
//     {
//         "nome": "WEDYLA DA SILVA",
//         "cidade": "TORITAMA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "868822065809038",
//         "imei2": "",
//         "modelo": "XIAOMI 9"
//     },
//     {
//         "nome": "JOSELITO PEREIRA",
//         "cidade": "OLINDA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL FUNDAMENTAL",
//         "nascimento": "",
//         "imei1": "350274353614214",
//         "imei2": "",
//         "modelo": "SANSUN a22"
//     },
//     {
//         "nome": "BRUNA MELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "3536628232404740",
//         "imei2": "",
//         "modelo": "iphone 15"
//     },
//     {
//         "nome": "THIAGO VINICIOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "86658365869206",
//         "imei2": "",
//         "modelo": "XIAOMI 9"
//     },
//     {
//         "nome": "BEATRIZ OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "355017385593608",
//         "imei2": "",
//         "modelo": "iphone 13"
//     },
//     {
//         "nome": "ERCILIA GERRA",
//         "cidade": "SÃO PAULO",
//         "estado": "SP",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "351428310009715",
//         "imei2": "",
//         "modelo": "SANSUNG"
//     },
//     {
//         "nome": "GIOVANNY MARCELINO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358546117806265",
//         "imei2": "",
//         "modelo": "iphone 13"
//     },
//     {
//         "nome": "VANIA MARIA MEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "352672764220943",
//         "imei2": "",
//         "modelo": "IPHONE11"
//     },
//     {
//         "nome": "ALLEF LOPES DE SOUZA",
//         "cidade": "SÃO PAULO",
//         "estado": "SP",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "350828560527491",
//         "imei2": "",
//         "modelo": "SANSUNG"
//     },
//     {
//         "nome": "ANNA BEATRIZ",
//         "cidade": "BELÉM",
//         "estado": "PA",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358216480050323",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "LEANDRO DE ALMEIDA",
//         "cidade": "SÃO LUÍS",
//         "estado": "MA",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353665909344395",
//         "imei2": "",
//         "modelo": "IPHONE 11"
//     },
//     {
//         "nome": "ELIACIE OLIVEIRA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "8666962046904573",
//         "imei2": "",
//         "modelo": "XIAOME"
//     },
//     {
//         "nome": "MATEUS JULIÃO",
//         "cidade": "SALVADOR",
//         "estado": "BA",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "353040115321480",
//         "imei2": "",
//         "modelo": "IPHONE 12"
//     },
//     {
//         "nome": "CINTIA MESQUITA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351808470861254",
//         "imei2": "",
//         "modelo": "MOTO G 34"
//     },
//     {
//         "nome": "JOÃO DE ANDRADE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "MOTO G 34"
//     },
//     {
//         "nome": "DANIELA QUIRINO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "350252264367007",
//         "imei2": "",
//         "modelo": "IPHONE SE"
//     },
//     {
//         "nome": "LIZANDRA NUNES",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "352051698619100",
//         "imei2": "",
//         "modelo": "IPHONE PRO MAX"
//     },
//     {
//         "nome": "MARIA ANDRADE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL  MÉDIO",
//         "nascimento": "",
//         "imei1": "351932264055350",
//         "imei2": "",
//         "modelo": "MOTO G 53 5G"
//     },
//     {
//         "nome": "MARCOS NASCIMENTO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR INCOMPLETO",
//         "nascimento": "",
//         "imei1": "354476111256917",
//         "imei2": "",
//         "modelo": "GALAXY A30 S"
//     },
//     {
//         "nome": "GILSON MELO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "356544399268579",
//         "imei2": "",
//         "modelo": "GALAXY A54"
//     },
//     {
//         "nome": "GIOVANA PATRÍCIO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIORD",
//         "nascimento": "",
//         "imei1": "359451182623357",
//         "imei2": "",
//         "modelo": "IPHONNE 13"
//     },
//     {
//         "nome": "MARILENE BARBOSA",
//         "cidade": "PAULISTA",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "354933333294217",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "EDUARDO DA PAZ",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "353607111074774",
//         "imei2": "",
//         "modelo": "MOTO EDGE PLUS"
//     },
//     {
//         "nome": "JOSEILDA FREITAS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "REDMI NOTE 9"
//     },
//     {
//         "nome": "JOICY DOS SANTOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "358946830933836",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "MARIA WANDERLEY",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "359167816246718",
//         "imei2": "",
//         "modelo": "MOTO G34 5G"
//     },
//     {
//         "nome": "MARIA VASCONCELOS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "358110361821924",
//         "imei2": "",
//         "modelo": ""
//     },
//     {
//         "nome": "WALLITHY JESUS",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351465646023093",
//         "imei2": "",
//         "modelo": "IPHONE 15 PRO MAX"
//     },
//     {
//         "nome": "JOELMA SENA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351024052741670",
//         "imei2": "",
//         "modelo": "GALAXY A 53"
//     },
//     {
//         "nome": "ÂNGELA FERREIRA",
//         "cidade": "CAMARAGIBE",
//         "estado": "PE",
//         "escolaridade": "PÓS GRADUAÇÃO",
//         "nascimento": "",
//         "imei1": "353159131127034",
//         "imei2": "",
//         "modelo": "MOTO 40 ULTRA"
//     },
//     {
//         "nome": "SARA SILVA",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "",
//         "imei2": "",
//         "modelo": "IPHONE XS MAX"
//     },
//     {
//         "nome": "FÂNIA MULULO",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL SUPERIOR",
//         "nascimento": "",
//         "imei1": "351371810106211",
//         "imei2": "",
//         "modelo": "S 23 ULTRA"
//     },
//     {
//         "nome": "FÁBIO DO VALE",
//         "cidade": "RECIFE",
//         "estado": "PE",
//         "escolaridade": "NÍVEL MÉDIO",
//         "nascimento": "",
//         "imei1": "352419914152836",
//         "imei2": "",
//         "modelo": "MOTO 04"
//     }
// ]
// console.log(lista.length)
export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState('')
    const [busca, setBusca] = useState('');
    useEffect(()=>{
        const fetch = async () => {
            const res = await conn.listarUsuarios()
            setUsuarios(res)
            //await conn.processarListaUsuarios(lista)
        }
        fetch()
    }, [])
    return(
        <>
            <h1>Usuarios Cadastrados</h1>  
            <p>{usuarios.length} registros.</p>
            <input  
                style={{margin: "10px 0px", width: "280px"}}
                type="text" placeholder="Pesquisar" value={busca} onChange={(e)=>{setBusca(e.target.value)}}
            />
            {
                busca ? (
                    usuarios && [...usuarios]
                    .filter(usuario => 
                        usuario.imei1?.includes(busca) || 
                        usuario.imei2?.includes(busca) || 
                        usuario.nome?.toLowerCase().includes(busca.toLowerCase())
                    )
                    .map(usuario => (
                        <CardUsuario key={usuario.id} usuario={usuario} />
                    ))
                ) : (
                    usuarios && [...usuarios]
                    .sort((a, b) => new Date(b.criacao) - new Date(a.criacao))
                    .map(usuario => (
                        <CardUsuario key={usuario.id} usuario={usuario} />
                    ))
                )
            }
        </>
    )
}