var tour = {
    id: "hello-hopscotch",
    steps: [
      {
        title: "Talespin",
        content: "Tells about the story Talespin",
        target: "header",
        placement: "right"
      },
      {
        title: "Popeye",
        content: "Tells about how Popeye character was introducted",
        target: "Popeye",
        placement: "bottom"
      },
      {
        title: "Rescue Rangers",
        content: "Tells about how Rescue Rangers character's was introducted",
        target: "Rescue Rangers",
        placement: "top"
      }
    ]
  };

  // Start the tour!
  hopscotch.startTour(tour);