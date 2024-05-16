export function GetSocialIcon(socialCat: string): string {
  if (socialCat.toLocaleLowerCase() == "facebook") {
    return "/social/facebook-new.svg";
  } else if (socialCat.toLocaleLowerCase() == "whatsapp") {
    return "/social/whatsapp.svg";
  } else if (
    socialCat.toLocaleLowerCase() == "twitter" ||
    socialCat.toLocaleLowerCase() == "x"
  ) {
    return "/social/x-new.svg";
  } else if (socialCat.toLocaleLowerCase() == "instagram") {
    return "/social/instagram.svg";
  } else if (socialCat.toLocaleLowerCase() == "youtube") {
    return "/social/youtube-new.svg";
  } else {
    return "/social/link.png";
  }
}
