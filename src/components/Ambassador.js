import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Under from "./Under/Under";
import "./Pages.sass";

const Ambassador = props => {
  return (
    <>
      <Header inPage />
      <div className="content-wrapper">
        <p>
          <span className="bold">SUPER USER ADDENDUM</span>
        </p>

        <p>
          This Super User Addendum (the “Addendum”) applies to Skippit’s
          relationship with its “Super Users”. If you agree to become a Super
          User you are agreeing to the terms and conditions of this Addendum, in
          addition to Skippit’s Terms of Service and Privacy Policy. In the
          event of conflict between the Skippit Terms of Service or Privacy
          Policy and this Addendum, the terms of this Addendum shall control.
        </p>
        <ul>
          <li>
            Skippit Super Users are high volume users of and advocates for the
            Skippit mobile application (the “Service”). Skippit Super Users are
            eligible to receive certain perquisites, incentives, rewards or
            gifts from Skippit based on your use and promotion of the Service
            (the “Incentives”). Super User Incentives will be developed and
            communicated to Super Users from time to time at Skippit’s sole
            discretion.{" "}
          </li>
          <li>
            As a Super User you will have the opportunity to refer the Service
            to others, attend promotional activities and events and provide
            commentary about the Service via various social media platforms
            (collectively “Super User Activities”). There is no obligation on
            you to perform the Super User Activities.
          </li>
          <li>
            As a Skippit Super User, you acknowledge and agree that the
            relationship between yourself and Skippit is on a purely voluntary
            basis. You acknowledge that you are participating in the Super User
            Activities out of enthusiasm for the Services and for the
            opportunity to earn Incentives. You and Skippit expressly agree that
            (1) this Addendum is not an employment agreement and does not create
            an employment relationship between you and Skippit; (2) you are not
            an employee and never have been an employee of Skippit and (3) no
            joint venture, franchisor- franchisee, partnership, independent
            contractor or agency relationship is intended or created by this
            Addendum. You have no authority to bind Skippit, and you undertake
            not to hold yourself out as an employee, agent, contractor or
            authorized representative of Skippit.
          </li>
          <li>
            Skippit does not, and shall not be deemed to, direct or control you
            generally or in your performance under this Addendum specifically,
            including in connection with your performance of Super User
            Activities or other acts or omissions, with respect to Skippit or
            otherwise. You retain the sole right to determine when, where, and
            for how long you pursue Super User Activities. You retain the option
            to accept, decline or ignore Skippit’s and any Skippit users’
            invitations to participate in Super User Activities. With the
            exception of any of Skippit’s legal requirements, Skippit shall have
            no right to require you to: (a) display Skippit’s names, logos or
            colors on your vehicle, on merchandise, or other paraphernalia; or
            (b) wear a uniform or any other clothing displaying Skippit’s names,
            logos or colors. You acknowledge and agree that you have complete
            discretion to perform or opt out of participating in any Super User
            Activities.
          </li>
          <li>
            Any Incentives given to Super Users are solely intended to be deemed
            a reward to certain Super Users for their loyalty and Super User
            Activities, and shall not create an employment or independent
            contractor relationship between any Super User and Skippit, unless
            accompanied by additional documentation substantiating a change in
            the relationship. You acknowledge that Skippit is under no
            obligation to reward Incentives to you or any Super User and all
            Incentives shall be deemed a one-time reward, and shall not entitle
            you to any future Incentives.
          </li>
          <li>
            Your conduct with respect to the Services shall remain at all times
            consistent with Skippit’s current Terms of Use and Privacy Policy.
            Skippit reserves the right, in is sole discretion, to terminate your
            use of the Services for any violation of law, public policy or
            Skippit’s <a href="/terms">Terms of Use</a> or{" "}
            <a href="/privacy">Privacy Policy.</a>
          </li>
        </ul>
      </div>
      <Under inPage />
    </>
  );
};

export default Ambassador;
