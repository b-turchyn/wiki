# Threat Modeling

You can perform threat modeling on software, infrastructure, networks, business
processes, and the physical footprint of your environment.

A system needs to be usable, but also needs to be as secure as reasonable. Part
of threat modeling is to balance the risks and security controls in place with
usability. In order to do that, threats need to be identified and documented.

## Terminology

- Attack Tree: tree-based diagram to conceptualize how threats could compromise
  a system. The goal is the root node. Each of the immediate sub-nodes provide a
  means of accomplishing that goal. The sub-nodes of that outline the steps
  required to perform that means.
- Controls: steps taken to detect and minimize a threat. Adding these should
  reduce the likelihood of a threat occurring. There are subcategories:
  - Preventions: a control that stops an attack
  - Mitigations: a control that reduces the likelihood of an attack, but won't
    necessarily prevent it
- Data Flow Diagram: shows the flow of information through the system. Tracks
  input and output, temporary vs permanent (short-term, long-term) data
- Impact: potential damage caused by an attack performed by a threat. This could
  be loss of intellectual property, lost trust, or financial loss.
- Threat Agent: someone who can carry out an attack
- Trust Boundary: where data is passed between two processes. The level of trust
  changes here. For example: an application making a database query to a DBMS.

## Threat Likelihood

If a threat is easy to exploit or is lucrative for someone to exploit, the
likelihood of a threat is considered higher. Something can be difficult to
exploit but the payoff is high; in this case, it's still considered a likely
threat.

## Threat Modeling Approaches

1. Asset-Centric: Analyze the impact of an asset being attacked. OCTAVE is an
   example modeling approach.
2. Application-Centric: Focuses on the application being threat modeled. Someone
   with an in-depth understanding of the internals of the application needs to
   do this. Can help with understanding the types of threats a system might be
   exposed to. Microsoft Threat Modeling is an example modeling approach.
3. Attack-Centric: Focuses on the attacker. Think about the motives and
   capabilities of the attacker and the impact their attacks would cause.
   [PASTA](security/threat-modeling/pasta.md) is an example modeling approach.

## Resources

- [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)
