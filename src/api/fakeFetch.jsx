export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/habits") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            habits: [
              {
                id: 1,
                name: "Running",
                repeat: "Daily",
                goal: "1 times daily",
                time: " 🕐 Any time",
                startDate: "Today",
                archived: true,
              },
              {
                id: 2,
                name: "Hit the Gym",
                repeat: "Daily",
                goal: "1 times daily",
                time: "🌞 Morning",
                startDate: "Tomorrow",
                archived: false,
              },
              {
                id: 3,
                name: "Meditation",
                repeat: "Daily",
                time: " 🌙 Night",
                goal: "2 times daily",
                startDate: "Today",
                archived: false,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Books list not found.",
        });
      }
    }, 2000);
  });
};
