import React from "react";

import { Column, Row, Image, Text, Stack, List, Button } from "components";
import { getEmployees } from "service/api";

const EmployeesPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};
    getEmployees(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Column
        className="bg-bluegray_50 font-sourcesanspro items-center justify-start mx-[auto] lg:pb-[244px] xl:pb-[279px] pb-[314px] 3xl:pb-[377px] 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] pr-[1px] w-[100%]"
        compId="1:40"
        comWidth={1440}
        comHeight={1024}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="1"
          comWidth={1430}
          comHeight={72}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Row
            className="bg-white_A700 border border-indigo_50 border-solid items-center justify-start lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
            compId="1:58"
            comWidth={1430}
            comHeight={72}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Row
              className="border border-bluegray_200 border-solid items-center justify-center lg:pb-[6px] xl:pb-[7px] pb-[8px] 3xl:pb-[9px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[19px] xl:pr-[22px] pr-[25px] 3xl:pr-[30px] 3xl:pt-[10px] lg:pt-[7px] xl:pt-[8px] pt-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%]"
              compId="1:77"
              comWidth={149}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_vector.png"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[1px] lg:mb-[1px] mb-[2px] mt-[0] object-contain w-[18%]"
                compId="I1:78;120:1866"
                comWidth={21}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-semibold lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]"
                compId="1:79"
                comWidth={85}
                comHeight={23}
                compLeft={6}
                compRight={0}
                compType="Text"
              >
                Employees
              </Text>
            </Row>
            <Text
              className="border border-bluegray_200 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[34%]"
              compId="1:81"
              comWidth={475}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Search your employees...
            </Text>
            <Stack
              className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[356px] xl:ml-[407px] ml-[458px] 3xl:ml-[549px] w-[3%]"
              compId="1:60"
              comWidth={42}
              comHeight={40}
              compLeft={458}
              compRight={0}
              compType="Stack"
            >
              <div
                className="absolute bg-bluegray_900 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"
                compId="1:61"
                comWidth={42}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Image
                src={"images/img_vector_1.png"}
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain w-[40%]"
                compId="I1:62;120:5217"
                comWidth={17}
                comHeight={16}
                compLeft={12}
                compRight={12}
                compType="Image"
                alt="Vector"
              />
            </Stack>
            <Stack
              className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]"
              compId="1:63"
              comWidth={42}
              comHeight={40}
              compLeft={25}
              compRight={0}
              compType="Stack"
            >
              <div
                className="absolute bg-white_A700 border border-gray_200 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"
                compId="1:64"
                comWidth={42}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Image
                src={"images/img_vector_2.png"}
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain w-[50%]"
                compId="I1:65;120:870"
                comWidth={21}
                comHeight={16}
                compLeft={10}
                compRight={10}
                compType="Image"
                alt="Vector"
              />
            </Stack>
            <Stack
              className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]"
              compId="1:66"
              comWidth={42}
              comHeight={40}
              compLeft={25}
              compRight={0}
              compType="Stack"
            >
              <div
                className="absolute bg-white_A700 border border-gray_200 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"
                compId="1:67"
                comWidth={42}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Image
                src={"images/img_vector_3.png"}
                className="absolute bottom-[5%] lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] inset-x-[0] mx-[auto] object-contain w-[79%]"
                compId="I1:68;120:1818"
                comWidth={33}
                comHeight={31}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
            </Stack>
            <Stack
              className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] xl:my-[1px] lg:my-[1px] my-[2px] w-[3%]"
              compId="1:69"
              comWidth={38}
              comHeight={36}
              compLeft={25}
              compRight={0}
              compType="Stack"
            >
              <div
                className="absolute bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius192 w-[100%]"
                compId="1:70"
                comWidth={38}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Image
                src={"images/img_1.png"}
                className="absolute bottom-[31%] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] inset-x-[0] mx-[auto] object-contain w-[13%]"
                compId="1:71"
                comWidth={5}
                comHeight={11}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="1"
              />
            </Stack>
            <Stack
              className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]"
              compId="1:72"
              comWidth={42}
              comHeight={40}
              compLeft={25}
              compRight={0}
              compType="Stack"
            >
              <div
                className="absolute bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"
                compId="1:73"
                comWidth={42}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Image
                src={"images/img_profilename.png"}
                className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[29%]"
                compId="1:74"
                comWidth={12}
                comHeight={14}
                compLeft={14}
                compRight={15}
                compType="Image"
                alt="ProfileName"
              />
            </Stack>
          </Row>
        </header>
        <Column
          className="font-inter items-center justify-start lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] outline outline-[1px] outline-gray_201 lg:pb-[176px] xl:pb-[201px] pb-[227px] 3xl:pb-[272px] w-[100%]"
          compId="1:524"
          comWidth={1430}
          comHeight={623}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start justify-start w-[100%]"
            compId="1:525"
            comWidth={1430}
            comHeight={396}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-evenly w-[100%]"
              compId="1:526"
              comWidth={1430}
              comHeight={44}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_title.png"}
                className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[5%]"
                compId="1:527"
                comWidth={77}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Title"
              />
              <Row
                className="bg-gray_50 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:pr-[106px] xl:pr-[121px] pr-[137px] 3xl:pr-[164px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] w-[16%]"
                compId="1:528"
                comWidth={225}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]"
                  compId="I1:528;25:82"
                  comWidth={41}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Name
                </Text>
                <Image
                  src={"images/img_.png"}
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] object-contain w-[21%]"
                  compId="I1:528;25:83"
                  comWidth={14}
                  comHeight={18}
                  compLeft={11}
                  compRight={0}
                  compType="Image"
                  alt=""
                />
              </Row>
              <Row
                className="bg-gray_50 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:pr-[10px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] w-[16%]"
                compId="1:529"
                comWidth={225}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]"
                  compId="I1:529;22:105"
                  comWidth={88}
                  comHeight={18}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Designation
                </Text>
                <Image
                  src={"images/img__2.png"}
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] object-contain w-[5%]"
                  compId="I1:529;22:106"
                  comWidth={9}
                  comHeight={18}
                  compLeft={93}
                  compRight={0}
                  compType="Image"
                  alt=""
                />
              </Row>
              <Text
                className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]"
                compId="1:530"
                comWidth={225}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Status
              </Text>
              <Text
                className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]"
                compId="1:531"
                comWidth={225}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Time
              </Text>
              <Text
                className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]"
                compId="1:532"
                comWidth={225}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Joining Date
              </Text>
              <Text
                className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]"
                compId="1:533"
                comWidth={225}
                comHeight={44}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Action
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              compId="2"
              comWidth={1430}
              comHeight={352}
              compLeft={0}
              compRight={0}
              compType="List"
              orientation="vertical"
            >
              {apiData?.map((apiDataEle) => {
                return (
                  <Row
                    className="items-center justify-evenly my-[0] w-[100%]"
                    compId="1:534"
                    comWidth={1430}
                    comHeight={44}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_content.png"}
                      className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[5%]"
                      compId="1:535"
                      comWidth={77}
                      comHeight={44}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Content"
                    />
                    <Column
                      className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]"
                      compId="1:536"
                      comWidth={225}
                      comHeight={44}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]"
                        compId="I1:536;1:35"
                        comWidth={45}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        {apiDataEle?.first_name}
                      </Text>
                    </Column>
                    <Text
                      className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]"
                      compId="1:537"
                      comWidth={225}
                      comHeight={44}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      {apiDataEle?.designation}
                    </Text>
                    <Column
                      className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]"
                      compId="1:539"
                      comWidth={225}
                      comHeight={44}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]"
                        compId="I1:539;25:63"
                        comWidth={68}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        {apiDataEle?.status}
                      </Text>
                    </Column>
                    <Text
                      className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]"
                      compId="1:540"
                      comWidth={225}
                      comHeight={44}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      2400
                    </Text>
                    <Text
                      className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]"
                      compId="1:541"
                      comWidth={225}
                      comHeight={44}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      {apiDataEle?.joining_date}
                    </Text>
                    <Row
                      className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] xl:pr-[110px] pr-[124px] 3xl:pr-[148px] lg:pr-[96px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]"
                      compId="1:542"
                      comWidth={225}
                      comHeight={44}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]"
                        compId="I1:542;27:150"
                        comWidth={25}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Edit
                      </Text>
                      <Text
                        className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]"
                        compId="I1:542;27:151"
                        comWidth={44}
                        comHeight={22}
                        compLeft={10}
                        compRight={0}
                        compType="Text"
                      >
                        Details
                      </Text>
                    </Row>
                  </Row>
                );
              })}
            </List>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default EmployeesPage;
