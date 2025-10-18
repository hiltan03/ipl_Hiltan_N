package com.wecp.progressive.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wecp.progressive.repository.MatchRepository;
import com.wecp.progressive.service.MatchService;
import com.wecp.progressive.entity.*;
import com.wecp.progressive.exception.NoMatchesFoundException;

import java.sql.SQLException;

import java.util.*;

@Service
public class MatchServiceImplJpa implements MatchService
{
    private MatchRepository matchRepository;

    @Autowired
    public MatchServiceImplJpa(MatchRepository matchRepository) {
        this.matchRepository = matchRepository;
    }

    public List<Match> getAllMatches() throws SQLException
    {
        return matchRepository.findAll();
    }

    public Match getMatchById(int matchId) throws SQLException
    {
        return matchRepository.findByMatchId(matchId);
    }

    public Integer addMatch(Match match) throws SQLException
    {
        Match matchObj = matchRepository.save(match);
        return (matchObj.getMatchId());
    }

    public void updateMatch(Match match) throws SQLException
    {
        Match matchObj = matchRepository.findById(match.getMatchId()).get();
        matchObj.setMatchId(match.getMatchId());
        matchObj.setFirstTeamId(match.getFirstTeamId());
        matchObj.setSecondTeamId(match.getSecondTeamId());
        matchObj.setMatchDate(match.getMatchDate());
        matchObj.setVenue(match.getVenue());
        matchObj.setResult(match.getResult());
        matchObj.setStatus(match.getStatus());
        matchObj.setWinnerTeamId(match.getWinnerTeamId());

        matchObj = matchRepository.save(matchObj);

    }

    public void deleteMatch(int matchId) throws SQLException
    {
        matchRepository.deleteById(matchId);
    }

    @Override
    public List<Match> getAllMatchesByStatus(String status) throws SQLException 
    {
        //return MatchService.super.getAllMatchesByStatus(status);
       // return matchRepository.findAllByStatus(status);
       List<Match> listOMatchesByStatus = matchRepository.findAllByStatus(status);

       if(listOMatchesByStatus.isEmpty())
       {
        throw new NoMatchesFoundException("");
       }

       return listOMatchesByStatus;
    }  
}