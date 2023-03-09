let commentsContainer = document.querySelector(".comments-container");

fetch("./json/data.json")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);

    let currnetUserName = data.currentUser.username;
    let commentsData = data.comments;

    commentsData.forEach((comm) => {
      //   let userPhotoSRC = comm.user.image.png;
      //   let userUserName = comm.user.username;
      //   let userContent = comm.content;
      //   let userCommDate = comm.createdAt;
      //   let userScore = comm.score;
      let userPhotoSRC = comm.user.image.png;
      let userUserName = comm.user.username;
      let userContent = comm.content;
      let userCommDate = comm.createdAt;
      let userScore = comm.score;

      //cmment container with it's replies
      let commentAndReplies = document.createElement("div");
      commentAndReplies.className = "commentAndReplies";
      // //comment container only without replies
      let comment = document.createElement("div");
      comment.className = "comment";
      // //comment score
      let scordiv = document.createElement("div");
      scordiv.className = "score-container";
      let plusspan = document.createElement("img");
      plusspan.className = "plus";
      plusspan.src = "images/icon-plus.svg";
      let scorespan = document.createElement("span");
      scorespan.className = "score";
      scorespan.innerHTML = userScore;
      let minusspan = document.createElement("img");
      minusspan.className = "minus";
      minusspan.src = "images/icon-minus.svg";
      scordiv.appendChild(plusspan);
      scordiv.appendChild(scorespan);
      scordiv.appendChild(minusspan);
      comment.appendChild(scordiv);
      // //comment content user data and text
      let commentcontentContainer = document.createElement("div");
      commentcontentContainer.className = "comment-content";
      let commentDataandreply = document.createElement("div");
      // //user data and reply icon
      commentDataandreply.className = "commentDataandreply";
      let commentData = document.createElement("div");
      commentData.className = "comment-data";
      let commentPhoto = document.createElement("img");
      commentPhoto.src = userPhotoSRC;
      let commentUserName = document.createElement("div");
      commentUserName.className = "user-name";
      commentUserName.innerHTML = userUserName;
      let commentDate = document.createElement("div");
      commentDate.className = "user-date";
      commentDate.innerHTML = userCommDate;
      // // reply icon

      let Reply = document.createElement("div");
      Reply.className = "reply";
      let Replyspan = document.createElement("img");
      Replyspan.src = "images/icon-reply.svg";
      let ReplyText = document.createElement("span");
      ReplyText.className = "reply-text";
      ReplyText.innerHTML = "Reply";

      Reply.appendChild(Replyspan);
      Reply.appendChild(ReplyText);

      commentData.appendChild(commentPhoto);
      commentData.appendChild(commentUserName);
      commentData.appendChild(commentDate);
      commentDataandreply.appendChild(commentData);

      commentDataandreply.appendChild(Reply);

      let commentText = document.createElement("div");
      commentText.className = "comment-text";
      commentText.innerHTML = userContent;
      commentcontentContainer.appendChild(commentDataandreply);
      commentcontentContainer.appendChild(commentText);
      comment.appendChild(commentcontentContainer);
      commentAndReplies.appendChild(comment);
      commentsContainer.appendChild(commentAndReplies);

      //Comment replies
      let userReplies = comm.replies;
      console.log(userReplies);
      userReplies.forEach((rep) => {
        let repPhotoSRC = rep.user.image.png;
        let repUserName = rep.user.username;
        let repContent = rep.content;
        let repCommDate = rep.createdAt;
        let repScore = rep.score;
        let repto = rep.replyingTo;
        let commentAndReplies = document.querySelector(".commentAndReplies");

        // //comment container only without replies
        let comment = document.createElement("div");
        comment.className = "commentReply";
        // //comment score
        let scordiv = document.createElement("div");
        scordiv.className = "score-container";
        let plusspan = document.createElement("img");
        plusspan.className = "plus";
        plusspan.src = "images/icon-plus.svg";
        let scorespan = document.createElement("span");
        scorespan.className = "score";
        scorespan.innerHTML = repScore;
        let minusspan = document.createElement("img");
        minusspan.className = "minus";
        minusspan.src = "images/icon-minus.svg";
        scordiv.appendChild(plusspan);
        scordiv.appendChild(scorespan);
        scordiv.appendChild(minusspan);
        comment.appendChild(scordiv);
        // //comment content user data and text
        let commentcontentContainer = document.createElement("div");
        commentcontentContainer.className = "comment-content";
        let commentDataandreply = document.createElement("div");
        // //user data and reply icon
        commentDataandreply.className = "commentDataandreply";
        let commentData = document.createElement("div");
        commentData.className = "comment-data";
        let commentPhoto = document.createElement("img");
        commentPhoto.src = repPhotoSRC;
        let commentUserName = document.createElement("div");
        commentUserName.className = "user-name";
        commentUserName.innerHTML = repUserName;
        let commentDate = document.createElement("div");
        commentDate.className = "user-date";
        commentDate.innerHTML = repCommDate;

        commentData.appendChild(commentPhoto);
        commentData.appendChild(commentUserName);
        commentData.appendChild(commentDate);
        commentDataandreply.appendChild(commentData);

        // // reply icon
        if (repUserName !== currnetUserName) {
          let Reply = document.createElement("div");
          Reply.className = "reply";
          let Replyspan = document.createElement("img");
          Replyspan.src = "images/icon-reply.svg";
          let ReplyText = document.createElement("span");
          ReplyText.className = "reply-text";
          ReplyText.innerHTML = "Reply";

          Reply.appendChild(Replyspan);
          Reply.appendChild(ReplyText);
          commentDataandreply.appendChild(Reply);
        } else {
          let options = document.createElement("div");
          options.className = "options";
          let deletee = document.createElement("delete");
          deletee.className = "delete";
          let deletimg = document.createElement("img");
          deletimg.src = "/images/icon-delete.svg";
          let delettext = document.createElement("span");
          delettext.innerHTML = "delete";
          deletee.appendChild(deletimg);
          deletee.appendChild(delettext);

          let change = document.createElement("delete");
          change.className = "change";
          let changeimg = document.createElement("img");
          changeimg.src = "/images/icon-edit.svg";
          let changetext = document.createElement("span");
          changetext.innerHTML = "edit";
          change.appendChild(changeimg);
          change.appendChild(changetext);
          options.appendChild(deletee);
          options.appendChild(change);
          commentDataandreply.appendChild(options);
        }

        let commentText = document.createElement("div");
        commentText.className = "comment-text";
        let commentTo = document.createElement("span");
        commentTo.className = "commentto";
        commentTo.innerHTML = "@" + repto;
        commentText.appendChild(commentTo);
        let commentTexxx = document.createElement("span");
        commentTexxx.className = "commenttexxx";
        commentTexxx.innerHTML = repContent;

        commentText.appendChild(commentTexxx);

        commentcontentContainer.appendChild(commentDataandreply);
        commentcontentContainer.appendChild(commentText);
        comment.appendChild(commentcontentContainer);
        commentAndReplies.appendChild(comment);
      });
    });
    //enter delete btn
    let deletebtn = document.querySelector(".delete");
    deletebtn.onclick = function () {
      this.parentElement.parentElement.parentElement.parentElement.remove();
    };
    //enter edit btn
    let editbtn = document.querySelector(".change");
    editbtn.onclick = function () {
      let textneedededit =
        this.parentElement.parentElement.nextSibling.textContent;
      console.log(textneedededit);
      let scoreNeeded =
        this.parentElement.parentElement.parentElement.previousSibling
          .childNodes[1].innerHTML;
      // let replytop = textneedededit.childNodes;
      // console.log(textneedededit);
      let parentEle =
        this.parentElement.parentElement.parentElement.parentElement;
      console.log(parentEle);
      parentEle.innerHTML = "";
      let adderphoto = document.createElement("img");
      adderphoto.src = data.currentUser.image.png;
      adderphoto.className = "update";
      let addtextarea = document.createElement("textarea");
      addtextarea.className = "add-textarea";
      addtextarea.innerHTML = textneedededit;
      addtextarea.style.padding = "10px";
      addtextarea.style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--Grayish-Blue");
      let sendbtn = document.createElement("button");
      sendbtn.className = "updatebtn";
      sendbtn.innerHTML = "Update";
      parentEle.style.alignItems = "flex-start";
      parentEle.appendChild(adderphoto);
      parentEle.appendChild(addtextarea);
      parentEle.appendChild(sendbtn);
      let updatebtn = document.querySelector(".updatebtn");
      updatebtn.onclick = function () {
        // let updatedText = document.querySelector(".commentReply .add-textarea");

        let updatedTexttt = document.querySelector(
          ".commentReply .add-textarea"
        ).value;

        console.log(updatedTexttt);

        parentEle.innerHTML = "";
        // //comment score
        let scordiv = document.createElement("div");
        scordiv.className = "score-container";
        let plusspan = document.createElement("img");
        plusspan.className = "plus";
        plusspan.src = "images/icon-plus.svg";
        let scorespan = document.createElement("span");
        scorespan.className = "score";
        scorespan.innerHTML = scoreNeeded;
        let minusspan = document.createElement("img");
        minusspan.className = "minus";
        minusspan.src = "images/icon-minus.svg";
        scordiv.appendChild(plusspan);
        scordiv.appendChild(scorespan);
        scordiv.appendChild(minusspan);
        parentEle.appendChild(scordiv);
        // //comment content user data and text
        let commentcontentContainer = document.createElement("div");
        commentcontentContainer.className = "comment-content";
        let commentDataandreply = document.createElement("div");
        // //user data and reply icon
        commentDataandreply.className = "commentDataandreply";
        let commentData = document.createElement("div");
        commentData.className = "comment-data";
        let commentPhoto = document.createElement("img");
        commentPhoto.src = data.currentUser.image.png;
        let commentUserName = document.createElement("div");
        commentUserName.className = "user-name";
        commentUserName.innerHTML = data.currentUser.username;
        let commentDate = document.createElement("div");
        commentDate.className = "user-date";
        // time1 = moment(new Date());
        // var timeAgo = moment.utc(utcTime).fromNow();
        commentDate.innerHTML = new Date().getMinutes() + " Min ago";

        commentData.appendChild(commentPhoto);
        commentData.appendChild(commentUserName);
        commentData.appendChild(commentDate);
        commentDataandreply.appendChild(commentData);
        let options = document.createElement("div");
        options.className = "options";
        let deletee = document.createElement("delete");
        deletee.className = "delete";
        let deletimg = document.createElement("img");
        deletimg.src = "/images/icon-delete.svg";
        let delettext = document.createElement("span");
        delettext.innerHTML = "delete";
        deletee.appendChild(deletimg);
        deletee.appendChild(delettext);

        let change = document.createElement("delete");
        change.className = "change";
        let changeimg = document.createElement("img");
        changeimg.src = "/images/icon-edit.svg";
        let changetext = document.createElement("span");
        changetext.innerHTML = "edit";
        change.appendChild(changeimg);
        change.appendChild(changetext);
        options.appendChild(deletee);
        options.appendChild(change);
        commentDataandreply.appendChild(options);
        let commentText = document.createElement("div");
        commentText.className = "comment-text";

        let commentTexxx = document.createElement("span");
        commentTexxx.className = "commenttexxx";
        commentTexxx.innerHTML = updatedTexttt;

        commentText.appendChild(commentTexxx);

        commentcontentContainer.appendChild(commentDataandreply);
        commentcontentContainer.appendChild(commentText);
        parentEle.appendChild(commentcontentContainer);
      };
    };
    let replybtns = document.querySelectorAll(".reply");
    replybtns.forEach((replybtn) => {
      replybtn.onclick = function () {
        let neededparenet = this.parentElement.parentElement.parentElement;
        console.log(neededparenet);

        if (neededparenet.nextElementSibling == null) {
          let addcontainer = document.createElement("div");
          addcontainer.className = "add-container";
          let adderphoto = document.createElement("img");
          adderphoto.src = data.currentUser.image.png;
          let addtextarea = document.createElement("textarea");
          addtextarea.className = "add-textarea";
          addtextarea.placeholder = "Add a Comment";
          let sendbtn = document.createElement("button");
          sendbtn.className = "send";
          sendbtn.innerHTML = "SEND";
          addcontainer.appendChild(adderphoto);
          addcontainer.appendChild(addtextarea);
          addcontainer.appendChild(sendbtn);
          neededparenet.insertAdjacentElement("afterend", addcontainer);
        } else {
          if (
            neededparenet.nextElementSibling.classList.contains("add-container")
          ) {
          } else {
            let addcontainer = document.createElement("div");
            addcontainer.className = "add-container";
            let adderphoto = document.createElement("img");
            adderphoto.src = data.currentUser.image.png;
            let addtextarea = document.createElement("textarea");
            addtextarea.className = "add-textarea";
            addtextarea.placeholder = "Add a Comment";
            let sendbtn = document.createElement("button");
            sendbtn.className = "send";
            sendbtn.innerHTML = "SEND";
            addcontainer.appendChild(adderphoto);
            addcontainer.appendChild(addtextarea);
            addcontainer.appendChild(sendbtn);
            neededparenet.insertAdjacentElement("afterend", addcontainer);
          }
        }
        let sendbtn = document.querySelector(".send");

        sendbtn.addEventListener("click", function () {
          let updatedTexttt = document.querySelector(
            ".add-container .add-textarea"
          ).value;

          console.log(updatedTexttt);
          let parentEle = this.parentElement;
          parentEle.innerHTML = "";
          parentEle.className = "commentReply";
          // //comment score
          let scordiv = document.createElement("div");
          scordiv.className = "score-container";
          let plusspan = document.createElement("img");
          plusspan.className = "plus";
          plusspan.src = "images/icon-plus.svg";
          let scorespan = document.createElement("span");
          scorespan.className = "score";
          scorespan.innerHTML = 2;
          let minusspan = document.createElement("img");
          minusspan.className = "minus";
          minusspan.src = "images/icon-minus.svg";
          scordiv.appendChild(plusspan);
          scordiv.appendChild(scorespan);
          scordiv.appendChild(minusspan);
          parentEle.appendChild(scordiv);
          // //comment content user data and text
          let commentcontentContainer = document.createElement("div");
          commentcontentContainer.className = "comment-content";
          let commentDataandreply = document.createElement("div");
          // //user data and reply icon
          commentDataandreply.className = "commentDataandreply";
          let commentData = document.createElement("div");
          commentData.className = "comment-data";
          let commentPhoto = document.createElement("img");
          commentPhoto.src = data.currentUser.image.png;

          let commentUserName = document.createElement("div");
          commentUserName.className = "user-name";
          commentUserName.innerHTML = data.currentUser.username;
          //   let commentDate = document.createElement("div");
          //   commentDate.className = "user-date";
          //   commentDate.innerHTML = "15 min ago";
          //   new Date().getMinutes() + " Min ago";

          commentData.appendChild(commentPhoto);
          commentData.appendChild(commentUserName);
          //   commentData.appendChild(commentDate);
          commentDataandreply.appendChild(commentData);
          let options = document.createElement("div");
          options.className = "options";
          let deletee = document.createElement("delete");
          deletee.className = "delete";
          let deletimg = document.createElement("img");
          deletimg.src = "/images/icon-delete.svg";
          let delettext = document.createElement("span");
          delettext.className = ".delete";
          delettext.innerHTML = "delete";
          deletee.appendChild(deletimg);
          deletee.appendChild(delettext);

          let change = document.createElement("delete");
          change.className = "change";
          let changeimg = document.createElement("img");
          changeimg.src = "/images/icon-edit.svg";
          let changetext = document.createElement("span");
          changetext.innerHTML = "edit";
          change.appendChild(changeimg);
          change.appendChild(changetext);
          options.appendChild(deletee);
          options.appendChild(change);
          commentDataandreply.appendChild(options);
          let commentText = document.createElement("div");
          commentText.className = "comment-text";

          let commentTexxx = document.createElement("span");
          commentTexxx.className = "commenttexxx";
          commentTexxx.innerHTML = updatedTexttt;

          commentText.appendChild(commentTexxx);

          commentcontentContainer.appendChild(commentDataandreply);
          commentcontentContainer.appendChild(commentText);

          parentEle.appendChild(commentcontentContainer);

          //enter delete btn
          let deletebtn = document.querySelector(".delete");
          deletebtn.onclick = function () {
            this.parentElement.parentElement.parentElement.parentElement.remove();
          };
          //enter edit btn
          let editbtn = document.querySelector(".change");
          editbtn.onclick = function () {
            let textneedededit =
              this.parentElement.parentElement.nextSibling.textContent;
            console.log(textneedededit);
            let scoreNeeded =
              this.parentElement.parentElement.parentElement.previousSibling
                .childNodes[1].innerHTML;
            // let replytop = textneedededit.childNodes;
            // console.log(textneedededit);
            let parentEle =
              this.parentElement.parentElement.parentElement.parentElement;
            console.log(parentEle);
            parentEle.innerHTML = "";
            let adderphoto = document.createElement("img");
            adderphoto.src = data.currentUser.image.png;
            adderphoto.className = "update";
            let addtextarea = document.createElement("textarea");
            addtextarea.className = "add-textarea";
            addtextarea.innerHTML = textneedededit;
            addtextarea.style.padding = "10px";
            addtextarea.style.color = getComputedStyle(
              document.documentElement
            ).getPropertyValue("--Grayish-Blue");
            let sendbtn = document.createElement("button");
            sendbtn.className = "updatebtn";
            sendbtn.innerHTML = "Update";
            parentEle.style.alignItems = "flex-start";
            parentEle.appendChild(adderphoto);
            parentEle.appendChild(addtextarea);
            parentEle.appendChild(sendbtn);
            let updatebtn = document.querySelector(".updatebtn");
            updatebtn.onclick = function () {
              // let updatedText = document.querySelector(".commentReply .add-textarea");

              let updatedTexttt = document.querySelector(
                ".commentReply .add-textarea"
              ).value;

              console.log(updatedTexttt);

              parentEle.innerHTML = "";
              // //comment score
              let scordiv = document.createElement("div");
              scordiv.className = "score-container";
              let plusspan = document.createElement("img");
              plusspan.className = "plus";
              plusspan.src = "images/icon-plus.svg";
              let scorespan = document.createElement("span");
              scorespan.className = "score";
              scorespan.innerHTML = scoreNeeded;
              let minusspan = document.createElement("img");
              minusspan.className = "minus";
              minusspan.src = "images/icon-minus.svg";
              scordiv.appendChild(plusspan);
              scordiv.appendChild(scorespan);
              scordiv.appendChild(minusspan);
              parentEle.appendChild(scordiv);
              // //comment content user data and text
              let commentcontentContainer = document.createElement("div");
              commentcontentContainer.className = "comment-content";
              let commentDataandreply = document.createElement("div");
              // //user data and reply icon
              commentDataandreply.className = "commentDataandreply";
              let commentData = document.createElement("div");
              commentData.className = "comment-data";
              let commentPhoto = document.createElement("img");
              commentPhoto.src = data.currentUser.image.png;
              let commentUserName = document.createElement("div");
              commentUserName.className = "user-name";
              commentUserName.innerHTML = data.currentUser.username;
              //   let commentDate = document.createElement("div");
              //   commentDate.className = "user-date";
              //   commentDate.innerHTML = moment(date, "YYYYMMDD").fromNow();

              commentData.appendChild(commentPhoto);
              commentData.appendChild(commentUserName);
              //   commentData.appendChild(commentDate);
              commentDataandreply.appendChild(commentData);
              let options = document.createElement("div");
              options.className = "options";
              let deletee = document.createElement("delete");
              deletee.className = "delete";
              let deletimg = document.createElement("img");
              deletimg.src = "/images/icon-delete.svg";
              let delettext = document.createElement("span");
              delettext.innerHTML = "delete";
              deletee.appendChild(deletimg);
              deletee.appendChild(delettext);

              let change = document.createElement("delete");
              change.className = "change";
              let changeimg = document.createElement("img");
              changeimg.src = "/images/icon-edit.svg";
              let changetext = document.createElement("span");
              changetext.innerHTML = "edit";
              change.appendChild(changeimg);
              change.appendChild(changetext);
              options.appendChild(deletee);
              options.appendChild(change);
              commentDataandreply.appendChild(options);
              let commentText = document.createElement("div");
              commentText.className = "comment-text";

              let commentTexxx = document.createElement("span");
              commentTexxx.className = "commenttexxx";
              commentTexxx.innerHTML = updatedTexttt;

              commentText.appendChild(commentTexxx);

              commentcontentContainer.appendChild(commentDataandreply);
              commentcontentContainer.appendChild(commentText);
              parentEle.appendChild(commentcontentContainer);
            };
          };
        });
      };
    });
  });
