import gql from 'graphql-tag';

export const LAUCHES_PAST_QUERY = gql`
query launchesPast {

  launchesPast {
    id
    mission_name
    launch_date_local
    links {
      flickr_images
    }
    rocket {
      rocket_name
    }
  }
}
`

