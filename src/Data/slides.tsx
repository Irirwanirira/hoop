import { welcomeImage, HollaImage, findParkingImage } from "../constants"

interface OnBoardingItem {
    id: string;
    title: string;
    intro: string;
    image: any;
  }

const OnBoardingData: OnBoardingItem[] = [
    {   
        id:"1",
        title: "Welcome",
        intro: "Find a best possible way to park",
        image: welcomeImage
    },
    {
        id:"2",
        title: "Hollaaaa",
        intro: "Find the best possible parking space nearby your desired destination",
        image: HollaImage
    },
    {
        id:"3",
        title: "Find Parking",
        intro: "Find your perfect parking space wherever and whenever you need",
        image: findParkingImage
    }
]

export default OnBoardingData