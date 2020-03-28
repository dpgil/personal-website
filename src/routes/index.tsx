const publicUrl = process.env.PUBLIC_URL;

export const Routes = {
  Home: {
    path: `${publicUrl}/`,
    name: "DANIEL GIL"
  },
  ArtPage: {
    path: `${publicUrl}/art`,
    name: "art"
  },
  CodePage: {
    path: `${publicUrl}/code`,
    name: "code"
  },
  MePage: {
    path: `${publicUrl}/me`,
    name: "me"
  }
};
