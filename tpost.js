terra
    .generateWidgetSession({
      referenceID: userid,
      providers: ["APPLE", "FITBIT"],
      authSuccessRedirectUrl: "success.com",
      authFailureRedirectUrl: "failure.com",
  		language: 'en'
    })
    .then((s) => {
      console.log(s);
    });

