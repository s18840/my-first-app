import React from "react";
import { useForm } from "react-hook-form";
import {
  AddressHeadingText,
  City,
  Country,
  DateOfBirth,
  District,
  FamilyName,
  FirstName,
  HouseNumber,
  PersonalDataHeadingText,
  PostalCode,
  ProfileDataText,
  ProfileDetailedInfoWrapper,
  SecondName,
  Street,
  SurName,
} from "../../styles/ProfilePageStyle";
import {} from "../../styles/ProfilePageFormStyle";
const dataJson = {
  content: [
    {
      FirstName: "Andrzej",
      SecondName: "Artur",
      Surname: "Jarząbkowski",
      FamilyName: "-",
      DateOfBirth: "24.12.1991",
      Street: "Akacjowa",
      HouseNumber: "12",
      City: "Warszawa",
      District: "Mazowieckie",
      PostalCode: "01-100",
      Country: "Poland",
    },
  ],
};
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const BasicInformation = () => (
  <>
    {dataJson.content.map((content) => (
      <ProfileDetailedInfoWrapper>
        <PersonalDataHeadingText>Personal Data</PersonalDataHeadingText>
        <AddressHeadingText>Address</AddressHeadingText>

        <FirstName>
          <ProfileDataText>First name:</ProfileDataText>
          {content.FirstName}
          <input></input>
        </FirstName>
        <SecondName>
          <ProfileDataText>Second name:</ProfileDataText>
          {content.SecondName}
        </SecondName>
        <SurName>
          <ProfileDataText>Surname:</ProfileDataText>
          {content.Surname}
        </SurName>
        <FamilyName>
          <ProfileDataText>Family name:</ProfileDataText>
          {content.FamilyName}
        </FamilyName>
        <DateOfBirth>
          <ProfileDataText>Date of birth:</ProfileDataText>
          {content.DateOfBirth}
        </DateOfBirth>
        <Street>
          <ProfileDataText>Street:</ProfileDataText>
          {content.Street}
        </Street>
        <HouseNumber>
          <ProfileDataText>HouseNumber:</ProfileDataText>
          {content.HouseNumber}
        </HouseNumber>
        <City>
          <ProfileDataText>City:</ProfileDataText>
          {content.City}
        </City>
        <District>
          <ProfileDataText>District:</ProfileDataText>
          {content.District}
        </District>
        <PostalCode>
          <ProfileDataText>Postal code:</ProfileDataText>
          {content.PostalCode}
        </PostalCode>
        <Country>
          <ProfileDataText>Country:</ProfileDataText>
          {content.Country}
        </Country>
      </ProfileDetailedInfoWrapper>
    ))}
  </>
);
export default BasicInformation;
